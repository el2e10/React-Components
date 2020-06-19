import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {MAIN_COLOR} from '../helper/strings';

const EditButton = ({onPress, color = MAIN_COLOR, text, buttonStyle, icon}) => {
  const styles = style(color);

  return (
    <TouchableOpacity
      style={{...styles.container, ...buttonStyle}}
      activeOpacity={0.7}
      onPress={onPress}>
      <Text style={styles.textStyle}>{text}</Text>
      {icon}
    </TouchableOpacity>
  );
};

const style = (mainColor = MAIN_COLOR) => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: mainColor + '44',
      alignSelf: 'flex-start',
      padding: 8,
      justifyContent: 'center',
      paddingHorizontal: 16,
      borderRadius: 16,
    },
    textStyle: {
      marginRight: 2,
      alignSelf: 'baseline',
      color: mainColor,
      fontFamily: 'Poppins-SemiBold',
      fontSize: 16,
    },
  });
};

export default EditButton;
