import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import AppButton from '../../components/AppButton';
import AppIntup from '../../components/AppInput';
import AppModal from '../../components/AppModal';
import AppScreenContainer from '../../components/AppScreenContainer';
import FullScreenLoader from '../../components/FullScreenLoader';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {RootStackParamList} from '../../navigation';
import {authSlice} from '../../store/reducers/AuthSlice';
import {logIn} from '../../store/thunks/Auth';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen = ({navigation}: Props) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const {isLoading, error} = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();

  return (
    <AppScreenContainer>
      <View style={styles.contentContainer}>
        <AppIntup
          value={login}
          onChangeText={setLogin}
          name={'login'}
          testID="loginInput"
        />
        <AppIntup
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
