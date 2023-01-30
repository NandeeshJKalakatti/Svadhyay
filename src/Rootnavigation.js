import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Authnavigation from './Authnavigation'
const Rootnavigation = () => {
  return ( 
    <NavigationContainer>
    <Authnavigation/>
 </NavigationContainer>
    
  )
}

export default Rootnavigation
