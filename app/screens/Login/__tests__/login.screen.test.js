import React from 'react';
import LoginScreen from './../index';
import {fireEvent, render} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {setupStore} from '../../../store/store';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({}),
  }),
);

describe('login screen', () => {
  function renderPage() {
    return render(
      <Provider store={setupStore()}>
        <LoginScreen />
      </Provider>,
    );
  }
  it('renders default elements', () => {
    const page = renderPage();

    const loginButton = page.getAllByTestId('loginButton');
    const loginInput = page.getAllByTestId('loginInput');
    const passwordInput = page.getAllByTestId('passwordInput');

    expect(loginInput.length).toBe(1);
    expect(loginButton.length).toBe(1);
    expect(passwordInput.length).toBe(1);
  });

  it('shows error messages', () => {
    const {getByTestId, getByText} = renderPage();
    const loginButton = getByTestId('loginButton');
    fireEvent.changeText(getByTestId('loginInput'), 'dfaf');
    fireEvent.changeText(getByTestId('passwordInput'), 'dfaf');
    fireEvent.press(loginButton);
    getByText('invalid username or password');
  });
});
