import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailScreen from '../screens/Detail';
import LoginScreen from '../screens/Login';
import {useAppSelector} from '../hooks/redux';
import AppSmallButton from '../components/AppSmallButton';
import HomeScreen from '../screens/Main';

export type RootStackParamList = {
  Home: undefined;
  Detail: {id: number};
  Login: undefined;
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
                name="Home"
                component={HomeScreen}
                options={{
                  title: 'List',
                  headerRight: () => (
                    <AppSmallButton onPress={() => null} text="add +" />
                  ),
                }}
              />
              <Stack.Screen
                options={{title: ''}}
                name="Detail"
                component={DetailScreen}
              />
            </>
          )}
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
