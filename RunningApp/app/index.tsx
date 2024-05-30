import { Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router'

const App = () => {
  return (
    <View className='flex-1 items-center justify-center bg-white'>
      <Text className='text-xl'>Running App</Text>
      <StatusBar style="auto" />
      <Link href={"/profile"} style={{color:'blue'}}>Go to profile</Link>
    </View>
  )
}

export default App


