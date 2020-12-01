import React from 'react';
import {createAppContainer} from 'react-navigation';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/FontAwesome5';

import ForgotPasswordScreen from './src/Screens/ForgotPasswordScreen';
import SignUpScreen from './src/Screens/SignUpScreen';
import SplashScreen from './src/Screens/SplashScreen';
import HomeScreen from './src/Screens/HomeScreen';
import LoginScreen from './src/Screens/LoginScreen';
import PhotoUploadScreen from './src/Screens/PhotoUploadScreen';
import CountrySelection from './src/Screens/CountrySelection';



const Tab = createMaterialBottomTabNavigator();

function AppNavigator() {
  const Stack = createStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        
        headerBackImage: ({ color }) => (
          null
        ),
        headerStyle: {
          backgroundColor: 'white',
                borderTopWidth: 0,
                height: 0,
        },
        headerTitleStyle: {
          display:'none',
        },
      
      }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="PhotoUploadScreen" component={PhotoUploadScreen} />
        <Stack.Screen name="CountrySelection" component={CountrySelection} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default AppNavigator



