

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Image } from 'react-native-elements';

//sada
export default class Splash extends React.Component<any>{
  
    componentDidMount(): void {
        setTimeout(
            () =>{this.props.navigation.navigate('TabMenu')},
            2000
        )
    }
  render() {return(
    <SafeAreaView style={styles.container}>
        <Image source={require('../assets/imgs/icon.png')} style={styles.image}/>
        <Text style={styles.header}>Lambe</Text>
    </SafeAreaView>
  );}
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center'
  },
  image:{
    height:200,
    width:200,
    resizeMode:'contain'
  },
  header:{
    fontSize:50,
    fontWeight:'bold'
  }
  
});

