import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from './HomePage';
import Settings from './Settings';
import Progress from './Progress';

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomePage" component={HomePage}  options={{ headerShown: false }}/>
      <Tab.Screen name="Setting" component={Settings}  options={{ headerShown: false }}/>
      <Tab.Screen name="Progress" component={Progress}  options={{ headerShown: false }}/>
    </Tab.Navigator>
  )
}

export default Home