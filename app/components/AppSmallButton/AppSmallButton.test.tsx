import React from 'react';

import {fireEvent, render} from '@testing-library/react-native';

import AppSmallButton from './index';

describe('AppSmallButton', () => {
  test('renders correctly with usual type', () => {
    const onPressMock = jest.fn();
    const {getByTestId, getByText} = render(
      <AppSmallButton
        text="Press Me"
        onPress={onPressMock}
        type="usual"
        testID="smallButton"
      />,
    );

    const button = getByTestId('smallButton');
    const buttonText = getByText('Press Me');

    expect(button).toBeDefined();
    expect(buttonText).toBeDefined();

    fireEvent.press(button);
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  test('renders correctly with simple type', () => {
    const onPressMock = jest.fn();
    const {getByTestId, getByText} = render(
      <AppSmallButton
        text="Press Me"
        onPress={onPressMock}
        type="simple"
        testID="smallButton"
      />,
    );

    const button = getByTestId('smallButton');
    const buttonText = getByText('Press Me');

    expect(button).toBeDefined();
    expect(buttonText).toBeDefined();

    fireEvent.press(button);
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
