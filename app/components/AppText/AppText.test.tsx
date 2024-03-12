import React from 'react';

import '@testing-library/jest-native/extend-expect';
import {render} from '@testing-library/react-native';

import AppText from './index';

describe('AppText', () => {
  test('renders correctly with default props', () => {
    const {getByText} = render(<AppText>Hello World</AppText>);
    const textElement = getByText('Hello World');

    expect(textElement).toBeDefined();
    expect(textElement).toHaveStyle({
      fontSize: 16,
    });
  });

  test('renders correctly with custom font style', () => {
    const {getByText} = render(<AppText fontStyle="h2">Hello World</AppText>);
    const textElement = getByText('Hello World');

    expect(textElement).toBeDefined();
    expect(textElement).toHaveStyle({
      fontSize: 24,
      fontWeight: 'bold',
    });
  });

  test('renders correctly with custom text alignment', () => {
    const {getByText} = render(
      <AppText textAlign="center">Hello World</AppText>,
    );
    const textElement = getByText('Hello World');

    expect(textElement).toBeDefined();
    expect(textElement).toHaveStyle({
      fontSize: 16,
      textAlign: 'center',
    });
  });

  test('renders correctly with custom text type', () => {
    const {getByText} = render(<AppText type="error">Hello World</AppText>);
    const textElement = getByText('Hello World');

    expect(textElement).toBeDefined();
    expect(textElement).toHaveStyle({
      fontSize: 16,
      color: 'red',
    });
  });

  test('renders correctly with custom style', () => {
    const {getByText} = render(
      <AppText style={{color: 'blue'}}>Hello World</AppText>,
    );
    const textElement = getByText('Hello World');

    expect(textElement).toBeDefined();
    expect(textElement).toHaveStyle({
      fontSize: 16,
      color: 'blue',
    });
  });
});
