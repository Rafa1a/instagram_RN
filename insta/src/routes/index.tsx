
import React from 'react';
import {SafeAreaView} from 'react-native';

import {NavigationContainer }from  '@react-navigation/native'

import Tab from './Navegation';

export default (props: any) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <NavigationContainer>
        
         <Tab />
          
      </NavigationContainer>
    </SafeAreaView>
  );
}



