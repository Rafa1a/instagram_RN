/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';


import MyComponent from './tes'
import Header from './components/Header';
import Post from './components/Post';
import Feed from './components/Feed';
export default class App extends React.Component{
  

  render() {
    const comments = [{
      nickname:'rafa leal altero',
      comment: 'excelente'
    }, {
      nickname:'gustava pereira',
      comment: 'horrivel melhore'
    }]
    
    return(
    <SafeAreaView style={styles.container}>
        
       <Feed/>
        
    </SafeAreaView>
  );}
}

const styles = StyleSheet.create({
  container: {
   flex:1
  },

});

