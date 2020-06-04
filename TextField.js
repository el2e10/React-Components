import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {GREY_COLOR, MAIN_COLOR} from '../values/strings';

const TextField = ({
  text,
  keyboardType,
  value,
  onChangeText,
  placeholder,
  style,
  errorMsgVisible = false,
}) => {
  // const [errorMsgVisible, setErrorMsgVisible] = useState(false);
  return (
    <View style={{...styles.container, ...style}}>
      <Text style={styles.textStyle}>{text}</Text>
      <TextInput
        style={styles.textLayoutStyle}
        keyboardType={keyboardType}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        selectionColor={MAIN_COLOR}
      />
      {errorMsgVisible ? (
        <Text style={styles.errorTextSyle}>{`Please add ${text}`}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  textLayoutStyle: {
    fontSize: 16,
    height: 40,
    borderBottomColor: GREY_COLOR,
    fontFamily: 'Raleway-Medium',
    borderBottomWidth: 1,
  },
  textStyle: {
    textTransform: 'uppercase',
    color: GREY_COLOR,
    fontFamily: 'Raleway-SemiBold',
  },
  errorTextSyle: {
    color: 'red',
    fontFamily: 'Raleway-SemiBold',
    marginTop: 4,
  },
});

export default TextField;
