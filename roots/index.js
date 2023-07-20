import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from '../screens/tabs';
import Signup from "../screens/Signup/Signup";
import Login from "../screens/Login/Login";
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  useEffect(() => {

    return () => {

    }
  }, [isSignedIn])
  return (
    <NavigationContainer >
      <Stack.Navigator
        screenOptions={{ headerShown: false }}>
        {isSignedIn == false ? (
              <Stack.Group>

            <Stack.Screen name="Login" component={Login} />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen name="Home" component={BottomTabs} />
            <Stack.Screen name="SignUp" component={BottomTabs} />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes