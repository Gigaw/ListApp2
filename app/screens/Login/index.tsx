import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import AppButton from '@app/components/AppButton';
import AppInput from '@app/components/AppInput';
import AppModal from '@app/components/AppModal';
import AppScreenContainer from '@app/components/AppScreenContainer';
import FullScreenLoader from '@app/components/FullScreenLoader';

import {useAppDispatch, useAppSelector} from '@app/hooks/redux';

import {authSlice} from '@app/store/reducers/AuthSlice';
import {logIn} from '@app/store/thunks/Auth';

const LoginScreen = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const {isLoading, error} = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();

  return (
    <AppScreenContainer>
      <View style={styles.contentContainer}>
        <AppInput
          value={login}
          onChangeText={setLogin}
          name={'login'}
          testID="loginInput"
        />
        <AppInput
          value={password}
          onChangeText={setPassword}
          name="password"
          testID="passwordInput"
          isPassword={true}
        />
        <AppButton
          onPress={() => dispatch(logIn(login, password))}
          text="login"
          style={styles.submitButton}
          testID="loginButton"
        />
      </View>
      <FullScreenLoader isLoading={isLoading} />
      <AppModal
        visible={!!error}
        text={error}
        onClose={() => dispatch(authSlice.actions.clearError())}
        testID="authModal"
      />
    </AppScreenContainer>
  );
};

const styles = StyleSheet.create({
  submitButton: {
    marginTop: 20,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 100,
  },
});

export default LoginScreen;
