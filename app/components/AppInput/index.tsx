import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';

import AppText from '../AppText';
import Spacer from '../Spacer';

interface Props {
  value: string;
  onChangeText: (text: string) => void;
  name: string;
  testID?: string;
  isPassword?: boolean;
  errorText?: string;
  placeholder?: string;
}

const AppInput = ({
  value,
  onChangeText,
  name,
  testID,
  isPassword,
  placeholder,
  errorText,
}: Props) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <View>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.container}>
        <TextInput
          placeholder={placeholder}
          value={value}
          secureTextEntry={isPassword && !isPasswordVisible}
          onChangeText={onChangeText}
          autoCapitalize={'none'}
          autoCorrect={false}
          testID={testID}
        />
        {isPassword && (
          <Entypo
            key={Number(isPasswordVisible)}
            name={isPasswordVisible ? 'eye-with-line' : 'eye'}
            size={20}
            color="black"
            onPress={() => setIsPasswordVisible(prev => !prev)}
            style={styles.eyeIcon}
          />
        )}
      </View>
      {!!errorText && (
        <>
          <Spacer height={5} />
          <AppText type="error" fontStyle="p3" style={styles.errorMessage}>
            {errorText}
          </AppText>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    width: '100%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 10,
    paddingLeft: 20,
    paddingRight: 40,
  },
  input: {},
  name: {
    paddingLeft: 5,
    marginBottom: 3,
    fontWeight: '500',
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: '50%',
  },
  errorMessage: {
    marginLeft: 10,
  },
});

export default AppInput;
