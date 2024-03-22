import React, {PropsWithChildren} from 'react';
import {Provider} from 'react-redux';

import {RenderOptions, render} from '@testing-library/react-native';
import {PersistGate} from 'redux-persist/integration/react';

import store, {
  AppStore,
  RootState,
  persistor,
  setupStore,
} from '@app/store/store';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: Partial<RootState>;
  store?: AppStore;
}

export function renderWithProviders(
  ui: React.ReactElement,
  extendedRenderOptions: ExtendedRenderOptions = {},
) {
  const {
    // preloadedState = {},
    // Automatically create a store instance if no store was passed in
    // currentStore = store,
    ...renderOptions
  } = extendedRenderOptions;

  const Wrapper = ({children}: PropsWithChildren) => (
    <Provider store={store}>{children}</Provider>
  );
  // return <Wrapper />;
  // Return an object with the store and all of RTL's query functions
  return {
    store,
    ...render(ui, {wrapper: Wrapper, ...renderOptions}),
  };
  // return render(<Wrapper />);
}
