import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

interface Props {
  value: string;
  onChangeText: (text: string) => void;
  name: string;
  testID?: string;
  isPassword?: boolean;
}

const AppInput = ({value, onChangeText, name, testID, isPassword}: Props) => {
  return (
    <View>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.container}>
        <TextInput
          value={value}
          secureTextEntry={isPassword}
          onChangeText={onChangeText}
          autoCapitalize={'none'}
          autoCorrect={false}
          testID={testID}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: '100%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 10,
    marginBottom: 10,
  },
  input: {},
  name: {
    paddingLeft: 5,
    marginBottom: 3,
    fontWeight: '500',
  },
});

export default AppInput;
