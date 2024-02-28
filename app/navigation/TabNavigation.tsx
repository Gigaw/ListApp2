import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps} from '@react-navigation/native';
import type {StackScreenProps} from '@react-navigation/stack';

import AlbumsScreen from '@app/screens/Albums';
import HomeScreen from '@app/screens/Main';
import SettingsScreen from '@app/screens/Settings';
import TodosScreen from '@app/screens/Todos';

import AppSmallButton from '@app/components/AppSmallButton';

import {RootStackParamList} from '.';

// Define the parameter types for each screen
type TabParamList = {
  Home: undefined;
  Settings: undefined;
  Albums: undefined;
  Todo: undefined;
};

type TabScreenProps<T extends keyof TabParamList> = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, T>,
  StackScreenProps<RootStackParamList>
>;

export type HomeProps = TabScreenProps<'Home'>;
export type SettingsProps = TabScreenProps<'Settings'>;
export type AlbumsProps = TabScreenProps<'Albums'>;

const Tab = createBottomTabNavigator<TabParamList>();

function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'List',
          headerRight: () =>
            AppSmallButton({
              onPress: () => console.log('Add button pressed'),
              text: 'Add',
            }),
        }}
      />
      <Tab.Screen name="Albums" component={AlbumsScreen} />
      <Tab.Screen name="Todos" component={TodosScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default TabNavigation;
