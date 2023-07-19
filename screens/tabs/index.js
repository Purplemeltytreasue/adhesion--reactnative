import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../Home';
import Signup from '../Signup/Signup.js'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


const BottomTabs = () => {
    const Tab = createMaterialBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="tabs_home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        headerShown:false
      }}
    >
      <Tab.Screen
        name="tabs_home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='home' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="tabs_signup"
        component={Signup}
        options={{
          tabBarLabel: 'Signup',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='login' color={color} size={size} />
          ),
        }}
      />
      </Tab.Navigator>
  )
}

export default BottomTabs