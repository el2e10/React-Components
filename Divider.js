import React from 'react';
import {View} from 'react-native';

const Divider = ({styles}) => {
  return (
    <View
      style={{
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        ...styles,
      }}
    />
  );
};

export default Divider;
