import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './homepage'
import Scheme from './Scheme'
import Branch from './Branch'
import Year from './Year'
const Stack = createNativeStackNavigator();
const Authnavigation = () => {
  return (
    <Stack.Navigator initialRouteName='Homepage'>
    <Stack.Screen name="Home" component={HomePage} 
    options={{
      headerShown:false,
    }}/>
    <Stack.Screen name="Scheme" component={Scheme}
     options={{
      headerShown:false,
    }} />
    <Stack.Screen name="Br" component={Branch}
     options={{
      headerShown:false,
    }} />
    <Stack.Screen name="Year" component={Year}
     options={{
      headerShown:false,
    }} />
  </Stack.Navigator>
  )
}

export default Authnavigation