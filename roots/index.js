import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from '../screens/tabs';
import Signup from "../screens/Signup";
import Login from "../screens/Login";
import Home from '../screens/Home';
import Settings from '../screens/Settings';

import AsyncStorage from '@react-native-async-storage/async-storage';
import profileScreen from '../screens/profileScreen';
import About from '../screens/about';

const Stack = createNativeStackNavigator();

const getIsSignedIn = () => {
  // custom logic
  const value =  AsyncStorage.getItem('user');
  //AsyncStorage.removeItem('user');
  if (AsyncStorage.getItem('user')?._k == null) {
    return false;
  } else if (AsyncStorage.getItem('user')?.id>0) {
    return true;
  } else{
    return true;
  }

};

const Routes = () => {
  const [isSignedIn, setisSignedIn] = useState(getIsSignedIn())
  return (
    <NavigationContainer >
      <Stack.Navigator
        screenOptions={{ headerShown: false }}> 
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={Signup} />    
            <Stack.Screen name="Home" component={BottomTabs} />
            <Stack.Screen name="about" component={BottomTabs} />
            <Stack.Screen name="profileScreen" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes