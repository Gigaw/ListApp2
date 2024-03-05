import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import AppText from '../AppText';

interface Props {
  text: string;
  onPress: () => void;
  type?: 'usual' | 'simple';
}
const AppSmallButton = ({text, onPress, type = 'usual'}: Props) => {
  let containerStyle = styles.container;
  let textStyle = styles.text;

  switch (type) {
    case 'usual':
      containerStyle = {
        ...containerStyle,
        backgroundColor: 'grey',
      };
      textStyle = {
        ...textStyle,
        color: 'white',
      };
      break;
    case 'simple':
      containerStyle = {
        ...containerStyle,
        backgroundColor: 'transparent',
      };
      textStyle = {
        ...textStyle,
        color: 'black',
      };
      break;
  }

  return (
    <TouchableOpacity onPress={onPress} style={containerStyle}>
      <AppText fontStyle="h5" style={textStyle}>
        {text}
      </AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
});

export default AppSmallButton;
