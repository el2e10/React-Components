import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const FloatingActionButton = ({onPress}) => {
  return (
    <View style={styles.container}>
      <Icon name="barcode-scan" size={24} onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgreen',
    width: 56,
    height: 56,
    borderRadius: 28,
    alignSelf: 'flex-end',
    marginRight: 16,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'red',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
});

export default FloatingActionButton;
