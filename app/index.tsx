import React, {useEffect} from 'react';
import {Provider} from 'react-redux';

import SplashScreen from 'react-native-splash-screen';
import {PersistGate} from 'redux-persist/integration/react';

import Navigation from './navigation';
import store, {persistor} from './store/store';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
