import React, { useState } from 'react';
import {View, Text, StyleSheet, Modal, Button, TouchableOpacity} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DropdownArrow from "@/app/arrow_down";


export default function App() {
  const [selectedState, setSelectedState] = useState('Alabama');
  const [modalVisible, setModalVisible] = useState(false);
  const [stateLabel, setStateLabel] = useState('State');
  const [serverStatus, setServerStatus] = useState('none');
  const [states, setStates] = useState([]);

  // URL to post to
  const getStatesURL = "http://localhost:3000/states";
  const sendStateURL = "http://localhost:3000/data";

  const postSelected = async (data:string) => {
    try {
      const response = await fetch(sendStateURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          state: data,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Response:', data);
        setServerStatus('Response:'+data.message);
      } else {
        console.log('Error:', response.status);
        setServerStatus('Error:'+response.status);
      }
    } catch (error) {
      console.log('Error:', error);
      setServerStatus('Error:'+error);
    }
  };

  const getStates = async () => {
    try {
      const response = await await fetch(getStatesURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log('Retrieved '+ data.states.length + ' states');
        setStates(JSON.parse(JSON.stringify(data.states)));
        setServerStatus('Response:'+'Retrieved '+ data.states.length + ' states');
      } else {
        console.log('Error:', response.status);
        setServerStatus('Error:'+response.status);
      }
    } catch (error) {
      console.log('Error:', error);
      setServerStatus('Error:'+error);
    }
  }

  const handleFinish = () => {
    setModalVisible(false);
    postSelected(selectedState);

  }

  const getAllStates = () => {
    getStates();
  }


  return (
    <View style={styles.container}>
      <Text style={styles.displayText}>State Picker Challenge</Text>
      <Text style={styles.smallStatusText}>{serverStatus}</Text>
      <View style={modalVisible?styles.buttonContainerOpen:styles.buttonContainer}
      >
        <TouchableOpacity
                          onPress={() => {
                            setModalVisible(true);
                            getAllStates();
                          }}
        >
          <Text style={modalVisible ? styles.smallTextOpen : styles.smallTextClose}
          >{stateLabel}
          </Text>
          {modalVisible ? (
            <Text style={styles.text}>
              {selectedState}
            </Text>
          ) : null}
          {/*Drop-down Arrow Icon, and sticks to the right of the touch opacity*/}
          <DropdownArrow />

        </TouchableOpacity>
      </View>


      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.bottomView}>

          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <TouchableOpacity onPress={() => handleFinish()}>
                <Text style={styles.doneButton}>Done</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.modalView}>
              <Picker
                selectedValue={selectedState}
                style={{width: 250, height: 200}}
                onValueChange={(itemValue, itemIndex) => {
                  setSelectedState(itemValue);
                }}
              >
                {states.map((state, index) => (
                  <Picker.Item key={index} label={state} value={state} />
                ))}

              </Picker>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({

  smallTextClose: {
    fontSize: 18,
    fontFamily: 'Arial',
    fontWeight: 'bold',
    color: 'gray',
  },
  smallTextOpen: {
    fontSize: 12,
    fontFamily: 'Arial',
    fontWeight: 'bold',
    color: 'gray',
  },
  smallStatusText: {
    fontSize: 12,
    fontFamily: 'Arial',
    color: 'gray',
  },
  text: {
    fontSize: 18,
    marginTop: 0,
    fontFamily: 'Arial',
    fontWeight: 'bold',
  },
  displayText: {
    fontSize: 24,
    marginTop: 10,
    fontFamily: 'Arial',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  bottomView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  buttonContainer: {
    backgroundColor: 'white',
    // Have gray border
    borderColor: 'black',
    borderWidth: 1,
    height: 50,
    width: '90%',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  buttonContainerOpen: {
    backgroundColor: 'lightblue',
    // Have gray border
    borderColor: 'blue',
    borderWidth: 2,
    height: 50,
    width: '90%',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  modalContent: {
    backgroundColor: 'rgba(247,247,247, 1)',
    padding: 20,
    maxHeight: '50%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  doneButton: {
    color: 'blue',
    fontSize: 18,
  },
});
