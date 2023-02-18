import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './homepage'
import Scheme from './Scheme'
import Branch from './Branch'
import Year from './Year'
import CVsem from '../SEM/CVSem';
import SEMC1 from '../SUB/Civil/1SEM';
import SEMC2 from '../SUB/Civil/2Sem';
import SEMC3 from '../SUB/Civil/3Sem';
import SEMC4 from '../SUB/Civil/4Sem';
import SEMC5 from '../SUB/Civil/5Sem';
import SEMC6 from '../SUB/Civil/6Sem';
import SEMC7 from '../SUB/Civil/7Sem';
import SEMC8 from '../SUB/Civil/8Sem';

const Stack = createNativeStackNavigator();
const Authnavigation = () => {
  return (
    <Stack.Navigator initialRouteName='Homepage'>
      <Stack.Screen name="Home" component={HomePage}
        options={{
          headerShown: false,
        }} />
      <Stack.Screen name="Scheme" component={Scheme}
        options={{
          headerShown: false,
        }} />
      <Stack.Screen name="Br" component={Branch}
        options={{
          headerShown: false,
        }} />
      <Stack.Screen name="Year" component={Year}
        options={{
          headerShown: false,

        }} />
        <Stack.Screen name="Cv" component={CVsem}
        options={{
          headerShown: false,

        }} />
        <Stack.Screen name="SEMC" component={SEMC1}
        options={{
          headerShown: false,

        }} />
        <Stack.Screen name="SEMC2" component={SEMC2}
        options={{
          headerShown: false,

        }} />
        <Stack.Screen name="SEMC3" component={SEMC3}
        options={{
          headerShown: false,

        }} />
        <Stack.Screen name="SEMC4" component={SEMC4}
        options={{
          headerShown: false,

        }} />
        <Stack.Screen name="SEMC5" component={SEMC5}
        options={{
          headerShown: false,

        }} />
        <Stack.Screen name="SEMC6" component={SEMC6}
        options={{
          headerShown: false,

        }} />
        <Stack.Screen name="SEMC7" component={SEMC7}
        options={{
          headerShown: false,

        }} />
        <Stack.Screen name="SEMC8" component={SEMC8}
        options={{
          headerShown: false,

        }} />
       
    </Stack.Navigator>
  )
}

export default Authnavigation