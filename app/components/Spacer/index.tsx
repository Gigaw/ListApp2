import React from 'react';
import {View, ViewStyle} from 'react-native';

interface SpacerProps {
  height?: number;
  width?: number;
  style?: ViewStyle;
}

const Spacer = ({height = 0, width = 0, style}: SpacerProps) => {
  return <View style={[{height, width}, style]} />;
};

export default Spacer;
