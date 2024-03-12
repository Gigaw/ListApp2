import React from 'react';

import {render} from '@testing-library/react-native';

import AppHeader from './index';

describe('AppHeader', () => {
  test('renders correctly', () => {
    const {getByText} = render(
      <AppHeader title="Test Title" description="Test Description" />,
    );

    const titleText = getByText('Test Title');
    const descriptionText = getByText('Test Description');

    expect(titleText).toBeTruthy();
    expect(descriptionText).toBeTruthy();
  });

  test('displays the correct title and description', () => {
    const {getByText} = render(
      <AppHeader title="Hello" description="This is a description" />,
    );

    const titleText = getByText('Hello');
    const descriptionText = getByText('This is a description');

    expect(titleText).toBeTruthy();
    expect(descriptionText).toBeTruthy();
  });
});
