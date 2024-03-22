import React from 'react';
import {Provider} from 'react-redux';

import {fireEvent, render, waitFor} from '@testing-library/react-native';
import {PersistGate} from 'redux-persist/integration/react';

// Adjust the import path as necessary
import * as reduxHooks from '@app/hooks/redux';

import store, {persistor} from '@app/store/store';

import {renderWithProviders} from '@app/utils/test-utils';

import LoginScreen from '../index';

// Mock the Redux hooks and any other necessary modules
jest.mock('@app/hooks/redux');

describe('LoginScreen', () => {
  let mockDispatch: any;

  // beforeEach(() => {
  //   // Mock the Redux state and dispatch
  //   jest.spyOn(reduxHooks, 'useAppSelector').mockImplementation(() => ({
  //     isLoading: false,
  //     error: null,
  //   }));
  //   mockDispatch = jest.fn();
  //   jest
  //     .spyOn(reduxHooks, 'useAppDispatch')
  //     .mockImplementation(() => mockDispatch);
  // });

  it('renders correctly', () => {
    const {getByTestId} = renderWithProviders(<LoginScreen />);
    expect(getByTestId('login-input')).toBeTruthy();
    expect(getByTestId('password-input')).toBeTruthy();
    expect(getByTestId('login-button')).toBeTruthy();
  });

  // it('validates inputs and shows error messages', async () => {
  //   const {getByTestId, findByText} = render(<LoginScreen />);

  //   const loginInput = getByTestId('login-input');
  //   const passwordInput = getByTestId('password-input');
  //   const loginButton = getByTestId('login-button');

  //   fireEvent.changeText(loginInput, '');
  //   fireEvent.changeText(passwordInput, '');
  //   fireEvent.press(loginButton);

  //   await waitFor(() => {
  //     expect(findByText('login must be at least 4')).toBeTruthy();
  //     expect(findByText('password must be at least 4')).toBeTruthy();
  //   });
  // });

  // it('enables the login button when the form is valid', () => {
  //   const {getByTestId} = render(<LoginScreen />);

  //   const loginInput = getByTestId('login-input');
  //   const passwordInput = getByTestId('password-input');
  //   const loginButton = getByTestId('login-button');

  //   fireEvent.changeText(loginInput, 'testuser');
  //   fireEvent.changeText(passwordInput, 'password');

  //   expect(loginButton.props.disabled).toBe(false);
  // });

  // it('dispatches the login action when the form is submitted', () => {
  //   const {getByTestId} = render(<LoginScreen />);

  //   const loginInput = getByTestId('login-input');
  //   const passwordInput = getByTestId('password-input');
  //   const loginButton = getByTestId('login-button');

  //   fireEvent.changeText(loginInput, 'testuser');
  //   fireEvent.changeText(passwordInput, 'password');
  //   fireEvent.press(loginButton);

  //   // expect(mockDispatch).toHaveBeenCalled();
  //   // Here, you can also check if the correct actions were dispatched
  // });

  // it('displays a server error when present', () => {
  //   jest.spyOn(reduxHooks, 'useAppSelector').mockImplementation(() => ({
  //     isLoading: false,
  //     error: 'Server error',
  //   }));

  //   const {findByText} = render(<LoginScreen />);
  //   expect(findByText('Server error')).toBeTruthy();
  // });
});
