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

interface ProfileProps {
    Profile_Login:(Profile_Login: boolean) => void;
    loginsaida?: Boolean;
    navigation: NavigationProp<any,any>;
}
export default class Profile extends React.Component<ProfileProps>{
    // logout = () => {
    //     this.setState({ loginsaida: false }, () => {
    //         this.props.navigation.navigate('Feed');
    //     });
    // }
    
    
  render() {
   
    return(
    <SafeAreaView style={styles.container}>
        <Avatar 
            size={100}
            rounded
            source={{uri: 'https://randomuser.me/api/portraits/men/36.jpg'}}
            icon={{ name: 'user', type: 'evilicon', color: '#009688' }}
            containerStyle={{
                width:150,
                height:150,
                marginTop:100
            }}
        />
        <Text style={styles.nickname}>ggg</Text>
        <Text style={styles.email}>ggg@</Text>
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

