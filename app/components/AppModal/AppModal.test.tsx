import React from 'react';
import {Text} from 'react-native';

import {fireEvent, render} from '@testing-library/react-native';

import AppModal from './index';

describe('AppModal', () => {
  test('renders correctly with visible prop true', () => {
    const {getByText, getByTestId} = render(
      <AppModal
        visible={true}
        title="Test Modal"
        onCancel={() => {}}
        onConfirm={() => {}}
        testID="test-modal">
        <></>
      </AppModal>,
    );

    const modalTitle = getByText('Test Modal');
    expect(modalTitle).toBeTruthy();

    const modal = getByTestId('test-modal');
    expect(modal).toBeTruthy();
  });

  test('renders correctly with visible prop false', () => {
    const {queryByText, queryByTestId} = render(
      <AppModal
        visible={false}
        title="Test Modal"
        onCancel={() => {}}
        onConfirm={() => {}}
        testID="test-modal">
        <></>
      </AppModal>,
    );

    const modalTitle = queryByText('Test Modal');
    expect(modalTitle).toBeFalsy();

    const modal = queryByTestId('test-modal');
    expect(modal).toBeFalsy();
  });

  test('calls onCancel when Cancel button is pressed', () => {
    const onCancelMock = jest.fn();
    const {getByText} = render(
      <AppModal
        visible={true}
        title="Test Modal"
        onCancel={onCancelMock}
        onConfirm={() => {}}>
        <></>
      </AppModal>,
    );

    const cancelButton = getByText('Cancel');
    fireEvent.press(cancelButton);

    expect(onCancelMock).toHaveBeenCalledTimes(1);
  });

  test('calls onConfirm when Okay button is pressed', () => {
    const onConfirmMock = jest.fn();
    const {getByText} = render(
      <AppModal
        visible={true}
        title="Test Modal"
        onCancel={() => {}}
        onConfirm={onConfirmMock}>
        <></>
      </AppModal>,
    );

    const okayButton = getByText('Okay');
    fireEvent.press(okayButton);

    expect(onConfirmMock).toHaveBeenCalledTimes(1);
  });

  test('renders correctly with children', () => {
    const onConfirmMock = jest.fn();
    const {getByText} = render(
      <AppModal
        visible={true}
        title="Test Modal"
        onCancel={() => {}}
        onConfirm={onConfirmMock}>
        <Text>New text</Text>
      </AppModal>,
    );

    const innerText = getByText('New text');

    expect(innerText).toBeTruthy();
  });
});
