import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

import {HelperText} from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';

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
        <HelperText type="error" visible={!!errorText}>
          {errorText}
        </HelperText>
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
});

export default AppInput;
