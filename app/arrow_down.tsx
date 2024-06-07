import React from 'react';
import { View } from 'react-native';
import {Feather, } from '@expo/vector-icons';

const DropdownArrow = () => {
  return (
    <View style={{
      position: 'absolute',
      right: 10,
      top: 4,
    }}>
      <Feather name="chevron-down" size={18} color="black" />
    </View>
  );
};

export default DropdownArrow;


