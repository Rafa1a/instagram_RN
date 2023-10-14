import React from 'react';
import type {PropsWithChildren} from 'react';
import {
    FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Header from './Header';
import Post from './Post';

export default class Feed extends React.Component{
    state = {
        posts: [{
            id: Math.random(),
            nickname: 'Rafael Pereira Filho',
            email:
            'rafaelprrflh@gmail.com',
            image: require('../assets/imgs/fence.jpg'),
        comments: [{
            nickname: 'John Ray Sheldon',
            comment: 'Stunning!'
        }, {
            nickname: 'Ana Julia Arruda',
            comment: 'Foto linda! Onde foi tirada?'
        }]
       
        }, {
        id: Math.random(),
        nickname: 'Francisco Leandro Lima',
        email: 'fllima@gmail.com',
        image: require('../assets/imgs/bw.jpg'),
        comments: []
        }]
    }
    

  render() {return(
    <SafeAreaView style={styles.container}>
        <Header />
        <FlatList 
            data={this.state.posts}
            keyExtractor={item => `${item.id}`}
            renderItem={({item}) => 
        <Post key={item.id} {...item}/>}
        />
    </SafeAreaView>
  );}
}

const styles = StyleSheet.create({
  container: {
  flex:1,
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'rgb(207, 210, 211)'
  },
  
});

