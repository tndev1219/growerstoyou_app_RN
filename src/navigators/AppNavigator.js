import {createStackNavigator, createSwitchNavigator, createDrawerNavigator, StackNavigator} from 'react-navigation';
import React from 'react';
import SplashScreen from '../screens/SplashScreen'
import TempScreen from '../screens/TempScreen'

export default createSwitchNavigator({
  Splash: SplashScreen,
  Auth: TempScreen
},
{
  initialRouteName: 'Splash',
});