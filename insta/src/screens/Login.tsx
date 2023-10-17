import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationProp } from '@react-navigation/native';


interface ProfileProps {
  Profile_Login:(Profile_Login: boolean) => void;
  loginsaida?: Boolean;
  navigation: NavigationProp<any,any>;
}
export default class App extends React.Component<ProfileProps>{
  state={
    email:'',
    password:''
  }
  login = () => {
    // this.props.navigation.navigate('Profile')
    this.props.Profile_Login(true);
  }
  Registro = () => {
    this.props.navigation.navigate('Registro')
  }
  render() {return(
    <SafeAreaView style={styles.container}>
      <TextInput placeholder='Email' style={styles.input} autoFocus keyboardType='email-address' value={this.state.email} onChangeText={email => this.setState({email})}/>

      <TextInput placeholder='Senha' style={styles.input}  keyboardType='email-address' 
      secureTextEntry value={this.state.password} onChangeText={password => this.setState({password})}/>

      <TouchableOpacity onPress={this.login} style={styles.buttom}>
        <Text style={styles.buttomtext}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={this.Registro} style={styles.buttom}>
        <Text style={styles.buttomtext}>Criar nova Conta</Text>
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
    padding: 10 ,
    backgroundColor:"#4286f4"
  },
  buttomtext: {
   
    fontSize: 20,
    color:'#fff'
  },
  input: {
    marginTop:20,
    width: '90%',
    backgroundColor:'#eee',
    height:40,
    borderWidth:1,
    borderColor:'#333'
  },
});

