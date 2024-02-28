import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AlbumDetail from '@app/screens/AlbumDetail';
import DetailScreen from '@app/screens/Detail';
import LoginScreen from '@app/screens/Login';

import {useAppSelector} from '@app/hooks/redux';

import TabNavigation from './TabNavigation';

export type RootStackParamList = {
  TabNavigation: undefined;
  Detail: {id: number};
  Login: undefined;
  AlbumDetail: {id: number; title: string};
};

export const Stack = createNativeStackNavigator<RootStackParamList>();

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
              <Stack.Screen name="Detail" component={DetailScreen} />
              <Stack.Screen name="AlbumDetail" component={AlbumDetail} />
            </>
          )}
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
