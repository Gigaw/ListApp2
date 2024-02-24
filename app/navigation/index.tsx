import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailScreen from '../screens/Detail';
import LoginScreen from '../screens/Login';
import {useAppSelector} from '../hooks/redux';
import TabNavigation from './TabNavigation';
import AlbumDetail from '../screens/AlbumDetail';

export type RootStackParamList = {
  TabNavigation: undefined;
  Detail: {id: number};
  Login: undefined;
  AlbumDetail: {id: number; title: string};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  const isAuthorized = useAppSelector(state => state.auth.isAuthorized);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <>
          {!isAuthorized ? (
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{headerShown: false}}
            />
          ) : (
            <>
              <Stack.Screen
                name="TabNavigation"
                component={TabNavigation}
                options={{headerShown: false}}
              />
              <Stack.Screen
                // options={{title: ''}}
                name="Detail"
                component={DetailScreen}
              />
              <Stack.Screen
                // options={{title: ''}}
                name="AlbumDetail"
                component={AlbumDetail}
              />
            </>
          )}
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
