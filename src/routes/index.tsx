import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Post} from '../screens';

const {Navigator, Screen} = createNativeStackNavigator();

const Routes = () => (
  <NavigationContainer>
    <Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: 'white',
        },
        animation: 'fade',
      }}
      initialRouteName="HOME">
      <Screen name="HOME" component={Home} />
      <Screen name="POST" component={Post} />
    </Navigator>
  </NavigationContainer>
);

export default Routes;
