
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableWithoutFeedback as TWF,
  TextInput
} from 'react-native';
import { Icon } from '@rneui/themed';




export default class AddComp extends React.Component{
  state={
    comment:'',
    editmode:false
  }
  handlraddComment =()=> {
    Alert.alert('adcionar!', this.state.comment)
  }
  render() {
    let commentArea=null;
    if(this.state.editmode){
        commentArea = 
          (<View style={styles.container}>
            <TextInput 
            placeholder='Pode comentar...'
            style={styles.input}
            autoFocus={false}
            value={this.state.comment}
            onChangeText={comment => this.setState({comment})}
            onSubmitEditing={this.handlraddComment}
            />
            <TWF onPress={()=>this.setState({editmode:false})}>
                <Icon name='close'
                      type='evilicon' size={30} color='#555'
                     
                      />
            </TWF>
          
          </View>)
        
    }else {
        commentArea = (
            <TWF onPress={() => this.setState({editmode:true})} >
                <View style={styles.container}>
                    <Icon name='comment'
                      type='evilicon' size={25} color='#555'/>
                    <Text style={styles.caption}>Adicione um comentario... </Text>
                </View>
            </TWF>
        )
    }
    return(
    <SafeAreaView style={{flex:1}}>
        {commentArea}
    </SafeAreaView>
  );}
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'row',
        alignItems: 'center',
        margin:10,
  
  },
  input: {
    width:"90%",
  },
  caption: {
   marginLeft:10,
   fontSize:12,
   color:'#242424'
  },
  
});

