import React, { useState, useEffect, useReducer } from 'react';
import { Text, StyleSheet, SafeAreaView, View, Button, Image, Platform } from 'react-native';
import icon from '../assets/imgs/icon.png';


export default class Header extends React.Component {
    
    

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.rowcontainer}>
          <Image source={icon} style={styles.image} />
          <Text style={styles.title}>lambe rraaaafa</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#BBB',
  },
  rowcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
  title: {
    color: '#000',
    fontFamily: 'shelter', // Use o nome da fonte carregada
    height: 30,
    fontSize: 28,
  },
  
});
