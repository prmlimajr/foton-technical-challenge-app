import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../pages/Home';
import Detail from '../pages/Detail';

const HomeScreen = createStackNavigator();

const StackRoutes = () => {
  return (
    <HomeScreen.Navigator>
      <HomeScreen.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <HomeScreen.Screen
        name="Detail"
        component={Detail}
        options={{headerShown: false}}
      />
    </HomeScreen.Navigator>
  );
};

export default StackRoutes;
