import React, {useState,useEffect,useReducer} from "react";
import { Text, StyleSheet, SafeAreaView, View, Button } from "react-native";
import { Avatar } from '@rneui/themed';
import emailavatar from '../array/emailavatar';
interface Authorpost {
    id?:number;
    nickname:string;
    email?:string
    image?: any;
}
interface authoravatar {
    email:string
    avatar:string
}
const Author: React.FC<Authorpost> = (props) => {
    let avatar:any = ""
    const defaultImage = 'https://example.com/';
    if(props.email){
        emailavatar.map((i)=> i.email=== props.email? avatar=i.image: avatar=defaultImage)
    }
    
    
    
    return (
        <View style={styles.container}>
            <Avatar 
            size={100}
            rounded
            source={{uri: avatar}}
            icon={{ name: 'user', type: 'evilicon', color: '#009688' }}
            containerStyle={{
                marginHorizontal:10,
                width:50,
                height:50,
                
            }}
            
        />
            <Text style={styles.nickname}>{props.nickname} </Text>
            
        </View>
    );
};
const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center"
    },
    avatar : {
        width:30,
        height:30,
        borderRadius:15,
        marginHorizontal:10
    },
    nickname: {
        color:'#444',
        marginVertical:10,
        fontSize:15,
        fontWeight:"bold"
    }

});
export default Author;