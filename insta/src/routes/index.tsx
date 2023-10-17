
import React from 'react';
import {SafeAreaView} from 'react-native';

import {NavigationContainer }from  '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login'

import Tab from './Navegation';
const Stack = createStackNavigator();

export default (props: any) => {
   
  return (

    <SafeAreaView style={{flex:1}}>
      <NavigationContainer>
        
         <Tab {...props} />
    
      </NavigationContainer>
    </SafeAreaView>
  );
}




