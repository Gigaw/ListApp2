import React from 'react';
import {View} from 'react-native';

import {render} from '@testing-library/react-native';

import DataAppContainer from './index';

describe('DataAppContainer', () => {
  test('renders loading indicator when isLoading is true', () => {
    const {getByTestId, queryByTestId} = render(
      <DataAppContainer isLoading={true}>
        <View testID="children" />
      </DataAppContainer>,
    );

    const loadingIndicator = getByTestId('loading-indicator');
    const children = queryByTestId('children');

    expect(loadingIndicator).toBeDefined();
    expect(children).toBeNull();
  });

  test('renders children when isLoading is false', () => {
    const {getByTestId, queryByTestId} = render(
      <DataAppContainer isLoading={false}>
        <View testID="children" />
      </DataAppContainer>,
    );

    const loadingIndicator = queryByTestId('loading-indicator');
    const children = getByTestId('children');

    expect(loadingIndicator).toBeNull();
    expect(children).toBeDefined();
  });
});
