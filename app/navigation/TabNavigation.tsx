import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps} from '@react-navigation/native';
import type {StackScreenProps} from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AlbumsScreen from '@app/screens/Albums';
import HomeScreen from '@app/screens/Main';
import ProfileScreen from '@app/screens/Profile';
import TodosScreen from '@app/screens/Todos';

import AppSmallButton from '@app/components/AppSmallButton';

import {RootStackParamList} from '.';

const IconSize = 30;

interface IconProps {
  focused: boolean;
  color: string;
  size: number;
}

const ProfileIcon = ({color, size}: IconProps) => (
  <Ionicons name="person" style={{fontSize: size}} color={color} />
);

const AlbumIcon = ({color, size}: IconProps) => (
  <Ionicons name="albums" style={{fontSize: size}} color={color} />
);

const TaskIcon = ({color, size}: IconProps) => (
  <FontAwesome name="tasks" style={{fontSize: size}} color={color} />
);
const PostIcon = ({color, size}: IconProps) => (
  <FontAwesome6 name="signs-post" style={{fontSize: size}} color={color} />
);

// Define the parameter types for each screen
type TabParamList = {
  Home: undefined;
  Profile: undefined;
  Albums: undefined;
  Todos: undefined;
};

type TabScreenProps<T extends keyof TabParamList> = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, T>,
  StackScreenProps<RootStackParamList>
>;

export type HomeProps = TabScreenProps<'Home'>;
export type ProfileProps = TabScreenProps<'Profile'>;
export type AlbumsProps = TabScreenProps<'Albums'>;
export type TodosProps = TabScreenProps<'Todos'>;

const Tab = createBottomTabNavigator<TabParamList>();

function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: PostIcon,
          title: 'Posts',
        }}
      />
      <Tab.Screen
        name="Albums"
        component={AlbumsScreen}
        options={{
          tabBarIcon: AlbumIcon,
          title: 'Albums',
        }}
      />
      <Tab.Screen
        name="Todos"
        component={TodosScreen}
        options={{
          tabBarIcon: TaskIcon,
          title: 'Todos',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ProfileIcon,
          title: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigation;
