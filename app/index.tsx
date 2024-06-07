import React, { useState } from 'react';
import {View, Text, StyleSheet, Modal, Button, TouchableOpacity} from 'react-native';
import { Picker } from '@react-native-picker/picker';


export default function App() {
  const [selectedState, setSelectedState] = useState('Alabama');
  const [modalVisible, setModalVisible] = useState(false);
  const [stateLabel, setStateLabel] = useState('State');

  return (
    <View style={styles.container}>
      <Text style={styles.displayText}>State Picker Challenge</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
            // style={styles.button}
                          onPress={() => setModalVisible(true)}
        >
          <Text style={modalVisible ? styles.smallTextOpen : styles.smallTextClose}
          >{stateLabel}
          </Text>
          {modalVisible ? (
            <Text style={styles.text}>
              {selectedState}
            </Text>
          ) : null}
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
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={styles.doneButton}>Done</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.modalView}>
              <Picker
                selectedValue={selectedState}
                style={{width: 250, height: 200}}
                onValueChange={(itemValue, itemIndex) => {
                  setSelectedState(itemValue);
                  // setModalVisible(false);
                }}
              >
                {/*All 50 states*/}
                <Picker.Item label="Alabama" value="Alabama" />
                <Picker.Item label="Alaska" value="Alaska" />
                <Picker.Item label="Arizona" value="Arizona" />
                <Picker.Item label="Arkansas" value="Arkansas" />
                <Picker.Item label="California" value="California" />
                <Picker.Item label="Colorado" value="Colorado" />
                <Picker.Item label="Connecticut" value="Connecticut" />
                <Picker.Item label="Delaware" value="Delaware" />
                <Picker.Item label="Florida" value="Florida" />
                <Picker.Item label="Georgia" value="Georgia" />
                <Picker.Item label="Hawaii" value="Hawaii" />
                <Picker.Item label="Idaho" value="Idaho" />
                <Picker.Item label="Illinois" value="Illinois" />
                <Picker.Item label="Indiana" value="Indiana" />
                <Picker.Item label="Iowa" value="Iowa" />
                <Picker.Item label="Kansas" value="Kansas" />
                <Picker.Item label="Kentucky" value="Kentucky" />
                <Picker.Item label="Louisiana" value="Louisiana" />
                <Picker.Item label="Maine" value="Maine" />
                <Picker.Item label="Maryland" value="Maryland" />
                <Picker.Item label="Massachusetts" value="Massachusetts" />
                <Picker.Item label="Michigan" value="Michigan" />
                <Picker.Item label="Minnesota" value="Minnesota" />
                <Picker.Item label="Mississippi" value="Mississippi" />
                <Picker.Item label="Missouri" value="Missouri" />
                <Picker.Item label="Montana" value="Montana" />
                <Picker.Item label="Nebraska" value="Nebraska" />
                <Picker.Item label="Nevada" value="Nevada" />
                <Picker.Item label="New Hampshire" value="New Hampshire" />
                <Picker.Item label="New Jersey" value="New Jersey" />
                <Picker.Item label="New Mexico" value="New Mexico" />
                <Picker.Item label="New York" value="New York" />
                <Picker.Item label="North Carolina" value="North Carolina" />
                <Picker.Item label="North Dakota" value="North Dakota" />
                <Picker.Item label="Ohio" value="Ohio" />
                <Picker.Item label="Oklahoma" value="Oklahoma" />
                <Picker.Item label="Oregon" value="Oregon" />
                <Picker.Item label="Pennsylvania" value="Pennsylvania" />
                <Picker.Item label="Rhode Island" value="Rhode Island" />
                <Picker.Item label="South Carolina" value="South Carolina" />
                <Picker.Item label="South Dakota" value="South Dakota" />
                <Picker.Item label="Tennessee" value="Tennessee" />
                <Picker.Item label="Texas" value="Texas" />
                <Picker.Item label="Utah" value="Utah" />
                <Picker.Item label="Vermont" value="Vermont" />
                <Picker.Item label="Virginia" value="Virginia" />
                <Picker.Item label="Washington" value="Washington" />
                <Picker.Item label="West Virginia" value="West Virginia" />
                <Picker.Item label="Wisconsin" value="Wisconsin" />
                <Picker.Item label="Wyoming" value="Wyoming" />

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
    justifyContent: 'center',
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
