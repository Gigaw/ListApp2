import React from 'react';

import {fireEvent, render} from '@testing-library/react-native';

import AppButton from './index';

describe('AppButton', () => {
  test('renders correctly', () => {
    const onPressMock = jest.fn();
    const {getByTestId, getByText} = render(
      <AppButton text="Press Me" onPress={onPressMock} testID="test-button" />,
    );

    const button = getByTestId('test-button');
    const buttonText = getByText('Press Me');

    expect(button).toBeTruthy();
    expect(buttonText).toBeTruthy();
  });

  test('calls onPress when button is pressed', () => {
    const onPressMock = jest.fn();
    const {getByTestId} = render(
      <AppButton text="Press Me" onPress={onPressMock} testID="test-button" />,
    );

    const button = getByTestId('test-button');
    fireEvent.press(button);

    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  test('disables button when disabled prop is true', () => {
    const onPressMock = jest.fn();
    const {getByTestId} = render(
      <AppButton
        text="Press Me"
        onPress={onPressMock}
        disabled={true}
        testID="test-button"
      />,
    );

    const button = getByTestId('test-button');

    fireEvent.press(button);

    expect(onPressMock).toHaveBeenCalledTimes(0);
  });
});
