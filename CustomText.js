import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CustomText = ({content, color, style}) => {
  const [viewHeight, setViewHeight] = useState(0);
  const [lineHeight, setLineHeight] = useState(0);
  const [noOfLines, setNoOfLines] = useState(0);

  useEffect(() => {
    if (viewHeight == null) return;
    if (lineHeight == null) return;
    let newNumberOfLines = viewHeight / lineHeight;
    if (newNumberOfLines) {
      setNoOfLines(Math.floor(newNumberOfLines));
    }
  }, [lineHeight, viewHeight]);

  return (
    <Text
      onLayout={(event) => {
        let {height} = event.nativeEvent.layout;
        setViewHeight(height);
      }}
      onTextLayout={({nativeEvent: {lines}}) => setLineHeight(lines[0].height)}
      numberOfLines={noOfLines}
      ellipsizeMode="tail"
      style={{
        ...style,
        color: color,
        justifyContent: 'center',
      }}>
      {content}
    </Text>
  );
};

export default CustomText;
