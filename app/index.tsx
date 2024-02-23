import React from 'react';
import Navigation from './navigation';
import {Provider} from 'react-redux';
import {setupStore} from './store/store';
import SplashScreen from 'react-native-splash-screen';
const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  });
  return (
    <Provider store={setupStore()}>
      <>
        <Navigation />
      </>
    </Provider>
  );
};

export default App;
