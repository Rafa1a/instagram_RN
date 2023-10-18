import React, { useState, useEffect, useReducer } from 'react';
import { Text, StyleSheet, SafeAreaView, View, Button, Image, Platform } from 'react-native';
import icon from '../assets/imgs/icon.png';
import { NavigationProp } from '@react-navigation/native';

import { connect } from 'react-redux';
import { Avatar,AvatarProps } from '@rneui/themed';
import emailavatar from '../array/emailavatar';

/////////////////////////////////////////////////////
interface ProfileProps  {

  email?:string
  name?:string
}
//////////////////////////////////////
 class Header extends React.Component<ProfileProps> {
    
    

  render() {
    ////////////funcao padrao de averiguacao do avatar////////////
    let avatar:any = "https://example.com/"
   
    if(this.props.email || this.props.email===''){
        emailavatar.map((i)=> i.email=== this.props.email? avatar=i.image: avatar)
    }
    ////////////////////////////////////////////////////////
    const name = this.props.name || 'Anonymous'
    const gravatar = <Avatar 
    size={100}
    rounded
    source={{uri: avatar}}
    icon={{ name: 'user', type: 'evilicon', color: '#009688' }}
    iconStyle= {{ 
      
      
    }}
    containerStyle={{
      width:50,
      height:50,
      marginLeft:10,
      
    }}/> 
    //////////////////////////////////////////////
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.rowcontainer}>
          <Image source={icon} style={styles.image} />
          <Text style={styles.title}>lambe rafa</Text>
        </View>
        <View style={styles.usercontiner}> 
            <Text style={styles.user}>{name}</Text>
            {gravatar}
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width:"100%",
    flexDirection:'row',
    marginTop: Platform.OS === 'ios' ? 20 : 0,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#BBB',
    justifyContent:'space-between'

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
  usercontiner: {
    flexDirection:'row',
    alignItems:'center'
  },
  user: {
    fontSize:10,
    color:'#888'
  },
  

  
});

const mapStateProps = ({ user }:{user:any}) => {
    return {
      email: user.email,
      name: user.name
    }
}
export default connect(mapStateProps)(Header)
// export default Header