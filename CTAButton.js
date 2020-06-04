import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {MAIN_COLOR} from '../values/strings';

const CTAButton = ({onPress, text, style, textStyle}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{...styles.buttonStyle, ...style}}
      onPress={() => onPress()}>
      <Text style={{...styles.buttonTextStyle, ...textStyle}}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 10,
    marginVertical: 16,
  },
  buttonTextStyle: {
    fontFamily: 'Raleway-Bold',
    fontSize: 16,
    alignSelf: 'center',
    color: MAIN_COLOR,
  },
});

export default CTAButton;
