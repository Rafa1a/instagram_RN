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
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
interface StateInicial {
    name:string,
    email:string,
    password:string
}

export default class App extends React.Component{
    state: StateInicial={
        name:'',
        email:'',
        password:''
    }

  render() {return(
    <SafeAreaView style={styles.container}>
        <TextInput placeholder='Nome' style={styles.input} autoFocus value={this.state.name}
        onChangeText={name => this.setState({name})}
        />
        <TextInput placeholder='Email' style={styles.input}  value={this.state.email}
        onChangeText={email => this.setState({email})}
        keyboardType='email-address'/> 
        <TextInput placeholder='Senha' style={styles.input}  value={this.state.password}
        onChangeText={password => this.setState({password})}
       secureTextEntry/> 
        <TouchableOpacity onPress={()=>{}} style={styles.buttom}>
            <Text style={styles.buttomtext}>Salvar</Text>
        </TouchableOpacity>
       
      
    </SafeAreaView>
  );}
}

const styles = StyleSheet.create({
  container: {
   flex:1,
   alignItems:'center',
   justifyContent:'center'
  },
  buttom: {
    marginTop:30,
    padding:10,
    backgroundColor:'#4286f4'
  },
  buttomtext: {
    
    fontSize: 20,
    color:'#fff'
  },
  input: {
    marginTop:20,
    width:'90%',
    backgroundColor:'#eee',
    height:40,
    borderWidth:1,
    borderColor:'#333',
    paddingLeft:15
  },
});

