import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import StackRoutes from './Stack.routes';
import AddBooks from '../pages/AddBooks';
import Profile from '../pages/Profile';

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#000',
        style: {
          height: 60,
          paddingBottom: 10,
          paddingTop: 10,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={StackRoutes}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <Icon name="home" color="#000" size={24} />
            ) : (
              <Icon name="home" color="#BFBEBf" size={24} />
            );
          },
        }}
      />
      <Tab.Screen
        name="AddBooks"
        component={AddBooks}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <Icon name="plus" color="#000" size={24} />
            ) : (
              <Icon name="plus" color="#BFBEBf" size={24} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <Icon name="user" color="#000" size={24} />
            ) : (
              <Icon name="user" color="#BFBEBf" size={24} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;
