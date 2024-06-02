import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

export default function TabsLayout() {
  return (
    <>
    <Tabs screenOptions={{
        headerShown: false
    }}>
        <Tabs.Screen name='Home'
        options={{
            title: 'Home',
            headerShown: false
        }}/>
    </Tabs>
    </>
  )
}
