import React from 'react';

import {render} from '@testing-library/react-native';

import AppScreenContainer from './index';

describe('AppScreenContainer', () => {
  test('renders correctly with default props', () => {
    const {getByTestId} = render(
      <AppScreenContainer>
        <></>
      </AppScreenContainer>,
    );

    const safeAreaView = getByTestId('app-screen-container');
    const container = getByTestId('app-screen-container-view');

    expect(safeAreaView).toBeTruthy();
    expect(container).toBeTruthy();
  });

  test('applies horizontal padding when disableHorizontalPadding prop is false', () => {
    const {getByTestId} = render(
      <AppScreenContainer>
        <></>
      </AppScreenContainer>,
    );

    const container = getByTestId('app-screen-container-view');
    expect(container).toHaveStyle({
      paddingHorizontal: 20, // Assuming GLOBAS_STYLES.PADDING_HORIZONTAL is 20
    });
  });

  test('does not apply horizontal padding when disableHorizontalPadding prop is true', () => {
    const {getByTestId} = render(
      <AppScreenContainer disableHorizontalPadding={true}>
        <></>
      </AppScreenContainer>,
    );

    const container = getByTestId('app-screen-container-view');
    expect(container).not.toHaveStyle({
      paddingHorizontal: 20, // Assuming GLOBAS_STYLES.PADDING_HORIZONTAL is 20
    });
  });
});
