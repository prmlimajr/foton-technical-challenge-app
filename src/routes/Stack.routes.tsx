import React, {useLayoutEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import Home from '../pages/Home';
import Detail from '../pages/Detail';

const HomeScreen = createStackNavigator();

type RootStackParamList = {
  Home: undefined;
  Detail: {id: number};
};

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;

type DetailScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Detail'
>;

type Props = {
  route: DetailScreenRouteProp;
  navigation: DetailScreenNavigationProp;
};

const StackRoutes = ({navigation, route}: Props) => {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === 'Detail') {
      navigation.setOptions({tabBarVisible: false});
    } else {
      navigation.setOptions({tabBarVisible: true});
    }
  }, [navigation, route]);

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
