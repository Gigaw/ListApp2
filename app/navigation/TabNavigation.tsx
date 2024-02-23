import React from 'react';
import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import SettingsScreen from '../screens/Settings';
import {RouteProp} from '@react-navigation/native';
import HomeScreen from '../screens/Main';

// Define the parameter types for each screen
type TabParamList = {
  Home: undefined;
  Settings: undefined;
};

// Define navigation prop types
type HomeScreenNavigationProp = BottomTabNavigationProp<TabParamList, 'Home'>;

// Define route prop types
type HomeScreenRouteProp = RouteProp<TabParamList, 'Home'>;

// Define the screen props types
export type HomeProps = {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
};

type SettingsScreenNavigationProp = BottomTabNavigationProp<
  TabParamList,
  'Settings'
>;

type SettingsScreenRouteProp = RouteProp<TabParamList, 'Settings'>;

export type SettingsProps = {
  navigation: SettingsScreenNavigationProp;
  route: SettingsScreenRouteProp;
};

const Tab = createBottomTabNavigator<TabParamList>();

function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default TabNavigation;
