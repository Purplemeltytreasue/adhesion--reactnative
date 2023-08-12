import { View, Text } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Home from './Home';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ProfileScreen from './profileScreen';
import About from './about';


const Tab = createMaterialBottomTabNavigator();
const BottomTabs = () => {
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
            <Icon name='home' color={color} size={size} /> 
          ),
        }}
        />
        <Tab.Screen
          name="profilescreen"
          component={ProfileScreen}
          ptions={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <Icon name='account-setting' color={color} size={size} /> 
            ),
          }}
        />
        <Tab.Screen
          name="about"
          component={About}
          ptions={{
            tabBarLabel: 'About',
            tabBarIcon: ({ color, size }) => (
              <Icon name='account-setting' color={color} size={size} /> 
            ),
          }}
        />

      </Tab.Navigator>
  )
}

export default BottomTabs