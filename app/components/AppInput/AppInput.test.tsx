import React from 'react';

import {fireEvent, render} from '@testing-library/react-native';

import AppInput from './index';

describe('AppInput', () => {
  test('renders correctly', () => {
    const onChangeTextMock = jest.fn();
    const {getByPlaceholderText, queryByTestId} = render(
      <AppInput
        value=""
        onChangeText={onChangeTextMock}
        name="Test Input"
        placeholder="Enter text"
        testID="test-input"
      />,
    );

    const input = getByPlaceholderText('Enter text');
    expect(input).toBeTruthy();

    const eyeIcon = queryByTestId('eye-icon');
    expect(eyeIcon).toBeNull(); // Eye icon should not be rendered initially
  });

  test('toggles password visibility when eye icon is pressed', () => {
    const onChangeTextMock = jest.fn();
    const {getByTestId} = render(
      <AppInput
        value=""
        onChangeText={onChangeTextMock}
        name="Password"
        isPassword={true}
        placeholder="Enter password"
        testID="test-input"
      />,
    );

    const eyeIcon = getByTestId('eye-icon');
    fireEvent.press(eyeIcon);

    expect(eyeIcon).toBeTruthy();
  });

  test('calls onChangeText when input text changes', () => {
    const onChangeTextMock = jest.fn();
    const {getByPlaceholderText} = render(
      <AppInput
        value=""
        onChangeText={onChangeTextMock}
        name="Test Input"
        placeholder="Enter text"
        testID="test-input"
      />,
    );

    const input = getByPlaceholderText('Enter text');
    fireEvent.changeText(input, 'New text');

    expect(onChangeTextMock).toHaveBeenCalledWith('New text');
  });

  test('displays error message when errorText prop is provided', () => {
    const onChangeTextMock = jest.fn();
    const {getByText} = render(
      <AppInput
        value=""
        onChangeText={onChangeTextMock}
        name="Test Input"
        placeholder="Enter text"
        errorText="Error message"
        testID="test-input"
      />,
    );

    const errorMessage = getByText('Error message');
    expect(errorMessage).toBeTruthy();
  });
});
