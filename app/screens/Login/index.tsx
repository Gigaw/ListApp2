import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import * as Yup from 'yup';
import {useFormik} from 'formik';

import AppButton from '@app/components/AppButton';
import AppInput from '@app/components/AppInput';
import AppScreenContainer from '@app/components/AppScreenContainer';
import FullScreenLoader from '@app/components/FullScreenLoader';
import Spacer from '@app/components/Spacer';

import {useAppDispatch, useAppSelector} from '@app/hooks/redux';

import {logIn} from '@app/store/thunks/Auth';

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
  const {values, handleChange, submitForm, errors, touched} = useFormik({
    initialValues: {login: '', password: ''},
    validationSchema,
    onSubmit: formValues => {
      dispatch(logIn(formValues.login, formValues.password));
    },
  });
  return (
    <AppScreenContainer>
      <View style={styles.contentContainer}>
        <AppInput
          placeholder="your login"
          value={values.login}
          onChangeText={handleChange('login')}
          name={'login'}
          testID="loginInput"
          errorText={touched.login ? errors.login : ''}
        />
        <Spacer height={5} />
        <AppInput
          placeholder="123456789"
          value={values.password}
          onChangeText={handleChange('password')}
          name="password"
          testID="passwordInput"
          isPassword={true}
          errorText={touched.password ? errors.password : ''}
        />
        <AppButton
          onPress={() => submitForm()}
          text="login"
          style={styles.submitButton}
          testID="loginButton"
        />
      </View>
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
