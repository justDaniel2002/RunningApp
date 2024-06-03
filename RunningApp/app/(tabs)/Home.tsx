import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from './HomePage';
import Settings from './Settings';
import Progress from './Progress';
import { Icon } from 'react-native-elements';

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomePage" component={HomePage}  options={{ headerShown: false, tabBarIcon:({focused}) => <Icon color={`${focused?"#9700e3":"black"}`} name='home' /> }}/>
      <Tab.Screen name="Setting" component={Settings}  options={{ headerShown: false, tabBarIcon:({focused}) => <Icon color={`${focused?"#9700e3":"black"}`} name='monitor-heart' /> }}/>
      <Tab.Screen name="Progress" component={Progress}  options={{ headerShown: false, tabBarIcon:({focused}) => <Icon color={`${focused?"#9700e3":"black"}`} name='settings' /> }}/>
    </Tab.Navigator>
  )
}

export default Home