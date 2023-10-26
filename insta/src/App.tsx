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
  StyleSheet,Alert
} from 'react-native';


import MyComponent from './tes'
import Header from './components/Header';
import Post from './components/Post';
import Feed from './screens/Feed';
import Indice from './routes/index'
import { connect } from 'react-redux';

class App extends React.Component<any>{
  
  componentDidUpdate = () => {
      if(this.props.text & this.props.text.toString().trim()){
          Alert.alert(this.props.title||'Mensagem', this.props.text.toString())
          this.props.clearMessage()


      }
  }
  render() {
    
    return(
      <Indice />
  );}
}

const mapStateProps = ({message}:{message:any}) =>{
  return {
      title:message.title,
      text:message.text
  }
}
const mapDispatchProps = (dispatch:any)=>{
    return {
        clearMessage: () =>dispatch({title:'',text:''})
    }
}

export default connect(mapStateProps,mapDispatchProps)(App)