import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StackRoutes from './Stack.routes';
import AddBooks from '../pages/AddBooks';
import Profile from '../pages/Profile';

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={StackRoutes} />
      <Tab.Screen name="AddBooks" component={AddBooks} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabRoutes;
