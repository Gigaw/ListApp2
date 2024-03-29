import React from 'react';
import {StyleSheet, View} from 'react-native';

import * as Yup from 'yup';
import {useFormik} from 'formik';
import Animated, {FadeInRight} from 'react-native-reanimated';

import AppButton from '@app/components/AppButton';
import AppInput from '@app/components/AppInput';
import AppScreenContainer from '@app/components/AppScreenContainer';
import AppText from '@app/components/AppText';
import Spacer from '@app/components/Spacer';

import {useAppDispatch, useAppSelector} from '@app/hooks/redux';

import {clearError} from '@app/store/reducers/AuthSlice';
import {logIn} from '@app/store/thunks/Auth';

import NoteImage from './NoteImage';

const validationSchema = Yup.object().shape({
  login: Yup.string().min(4, 'login must be at least 4').required('Required'),
  password: Yup.string()
    .min(4, 'password must be at least 4')
    .required('Required'),
});

const LoginScreen = () => {
  const isLoading = useAppSelector(state => state.auth.isLoading);
  const serverError = useAppSelector(state => state.auth.error);
  const dispatch = useAppDispatch();
  const {values, handleChange, submitForm, errors, touched, isValid} =
    useFormik({
      initialValues: {login: '', password: ''},
      validationSchema,
      onSubmit: formValues => {
        dispatch(clearError());
        dispatch(logIn(formValues.login, formValues.password));
      },
    });

  return (
    <AppScreenContainer>
      <Animated.View
        style={styles.contentContainer}
        entering={FadeInRight.duration(500).delay(400)}>
        <View style={styles.appImageContainer}>
          <NoteImage />
          <AppText fontStyle="h2" textAlign="center">
            Welcome to the app
          </AppText>
          <Spacer height={5} />
          <AppText textAlign="center">
            Fill in your credentials to start the journey
          </AppText>
        </View>
        <Spacer height={20} />
        <AppInput
          placeholder="your login"
          value={values.login}
          onChangeText={handleChange('login')}
          name="login"
          testID="login-input"
          errorText={touched.login ? errors.login : ''}
        />
        <Spacer height={5} />
        <AppInput
          placeholder="123456789"
          value={values.password}
          onChangeText={handleChange('password')}
          name="password"
          testID="password-input"
          isPassword={true}
          errorText={touched.password ? errors.password : ''}
        />
        <AppButton
          disabled={!isValid || isLoading}
          onPress={() => submitForm()}
          text="login"
          style={styles.submitButton}
          testID="login-button"
        />
        {!!serverError && (
          <>
            <Spacer height={5} />
            <AppText fontStyle="p3" type="error" textAlign="center">
              {serverError}
            </AppText>
          </>
        )}
      </Animated.View>
    </AppScreenContainer>
  );
};

const styles = StyleSheet.create({
  appImageContainer: {
    alignItems: 'center',
  },
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
