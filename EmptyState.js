import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LottieFiles from 'lottie-react-native';
import Button from './CTAButton';
import {MAIN_COLOR} from '../values/strings';

const EmptyState = ({Heading, onPress}) => {
  return (
    <View style={styles.container}>
      <LottieFiles
        source={require('../../assets/LottieFiles/fail.json')}
        autoPlay
        loop
        resizeMode="cover"
        style={styles.loadingStyle}
      />
      <Text style={styles.loadingTextStyle}>Sorry no deals found </Text>
      <Text style={styles.loadingSubTextStyle}>Please try other location</Text>
      <Button
        text="Change location"
        style={styles.buttonStyle}
        onPress={() => onPress()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingStyle: {
    width: 150,
    height: 150,
    alignSelf: 'center',
  },
  loadingSubTextStyle: {
    fontFamily: 'Raleway-Medium',
    color: 'grey',
    fontSize: 16,
    marginTop: 8,
  },
  loadingTextStyle: {
    fontFamily: 'Raleway-Bold',
    fontSize: 22,
  },
  buttonStyle: {
    borderWidth: 1,
    borderColor: MAIN_COLOR,
  },
});

export default EmptyState;
