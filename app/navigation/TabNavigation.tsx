import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps} from '@react-navigation/native';
import type {StackScreenProps} from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AlbumsScreen from '@app/screens/Albums';
import PostsScreen from '@app/screens/Posts';
import ProfileScreen from '@app/screens/Profile';
import TodosScreen from '@app/screens/Todos';

import {RootStackParamList} from '.';

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
  Posts: undefined;
  Profile: undefined;
  Albums: undefined;
  Todos: undefined;
};

type TabScreenProps<T extends keyof TabParamList> = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, T>,
  StackScreenProps<RootStackParamList>
>;

export type PostsProps = TabScreenProps<'Posts'>;
export type ProfileProps = TabScreenProps<'Profile'>;
export type AlbumsProps = TabScreenProps<'Albums'>;
export type TodosProps = TabScreenProps<'Todos'>;

const Tab = createBottomTabNavigator<TabParamList>();

function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          tabBarIcon: PostIcon,
          title: 'Posts',
          tabBarTestID: 'post-tab',
        }}
      />
      <Tab.Screen
        name="Albums"
        component={AlbumsScreen}
        options={{
          tabBarIcon: AlbumIcon,
          title: 'Albums',
          tabBarTestID: 'album-tab',
        }}
      />
      <Tab.Screen
        name="Todos"
        component={TodosScreen}
        options={{
          tabBarIcon: TaskIcon,
          title: 'Todos',
          tabBarTestID: 'todo-tab',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ProfileIcon,
          title: 'Profile',
          tabBarTestID: 'profile-tab',
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigation;
