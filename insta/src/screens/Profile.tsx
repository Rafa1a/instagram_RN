import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity
} from 'react-native';
import { Avatar,AvatarProps } from '@rneui/themed';
import { NavigationProp } from '@react-navigation/native';
import { connect } from 'react-redux';
import { logout } from '../store/action/users';
import { Dispatch } from 'redux';
import emailavatar from '../array/emailavatar';

////////////////////////////////////////////////////////////////
interface ProfileProps  {
    Profile_Login:(Profile_Login: boolean) => void;
    loginsaida?: Boolean;
    navigation: NavigationProp<any,any>;
    email?:string
    name?:string
}

///////////////////////////////
 class Profile extends React.Component<ProfileProps>{
    logout = () => {
        this.setState({ loginsaida: false }, () => {
            this.props.navigation.navigate('Feed');
        });
    }
    
    
  render() {
    let avatar:any = "https://example.com/"
    const defaultImage = 'https://example.com/';
    if(this.props.email){
        emailavatar.map((i)=> i.email=== this.props.email? avatar=i.image: avatar=defaultImage)
    }
    return(
    <SafeAreaView style={styles.container}>
        <Avatar 
            size={100}
            rounded
            source={{uri: avatar}}
            icon={{ name: 'user', type: 'evilicon', color: '#009688' }}
            containerStyle={{
                width:150,
                height:150,
                marginTop:100
            }}
        />
        <Text style={styles.nickname}>{this.props.name}</Text>
        <Text style={styles.email}>{this.props.email}</Text>
        <TouchableOpacity onPress={() =>this.props.Profile_Login(false)} style={styles.buttom}>
            <Text style={styles.buttomtext}>
                sair
            </Text>
        </TouchableOpacity>
    </SafeAreaView>
  );}
}

const styles = StyleSheet.create({
    container: {
    flex:1,
    alignItems:'center'
    },
    
    nickname: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop:30
    },
    email: {
    marginTop: 20,
    fontSize: 25,
    
    },
    buttom: {
        marginTop:30,
        padding:10,
        backgroundColor:'#4286f4'
    },
    buttomtext:{
        fontSize:20,
        color:'#fff'
    }
});

const mapStateProps = ({user}:{user:any}) => {
    return {
        email: user.email,
        name : user.name
    }
}
const mapDispatchProps = (dispatch:Dispatch) => {
    return {
      onLogin : () => dispatch(logout())
    }
}
export default connect(mapStateProps, mapDispatchProps)(Profile)