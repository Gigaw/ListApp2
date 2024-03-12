import React from 'react';
import {Text} from 'react-native';

import {fireEvent, render} from '@testing-library/react-native';

import AppListItem from './index';

describe('AppListItem', () => {
  test('renders correctly with TouchableOpacity', () => {
    const onPressMock = jest.fn();
    const {getByText} = render(
      <AppListItem onPress={onPressMock}>
        <Text>Item</Text>
      </AppListItem>,
    );

    const itemText = getByText('Item');
    expect(itemText).toBeTruthy();
  });

  test('renders correctly without TouchableOpacity', () => {
    const {getByText} = render(
      <AppListItem>
        <Text>Item</Text>
      </AppListItem>,
    );

    const itemText = getByText('Item');
    expect(itemText).toBeTruthy();
  });

  test('calls onPress when TouchableOpacity is pressed', () => {
    const onPressMock = jest.fn();
    const {getByText} = render(
      <AppListItem onPress={onPressMock}>
        <Text>Item</Text>
      </AppListItem>,
    );

    const itemText = getByText('Item');
    fireEvent.press(itemText);

    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  test('calls onLongPress when TouchableOpacity is long pressed', () => {
    const onLongPressMock = jest.fn();
    const {getByText} = render(
      <AppListItem onLongPress={onLongPressMock} testID="AppListItem">
        <Text>Item</Text>
      </AppListItem>,
    );

    const itemText = getByText('Item');
    fireEvent(itemText, 'longPress');

    expect(onLongPressMock).toHaveBeenCalledTimes(1);
  });

  test('applies paddingDisabled style when paddingDisabled prop is true', () => {
    const {getByText, queryByTestId} = render(
      <AppListItem paddingDisabled={true} testID={'app-list-item'}>
        <Text testID="inner-text">Item</Text>
      </AppListItem>,
    );

    const innerText = getByText('Item');
    const innerView = queryByTestId('app-list-item');

    expect(innerText).toBeTruthy();
    expect(innerView).toHaveStyle({
      paddingHorizontal: 0,
      paddingVertical: 0,
    });
  });
});
