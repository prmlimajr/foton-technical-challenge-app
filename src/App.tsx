import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppProvider from './hooks';
import {StatusBar} from 'react-native';
import Toast from 'react-native-toast-message';
import Routes from './routes';

export function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" backgroundColor="#fffcf9" />
        <Routes />
        <Toast ref={ref => Toast.setRef(ref)} />
      </NavigationContainer>
    </AppProvider>
  );
}
