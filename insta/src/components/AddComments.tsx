
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
import { connect } from 'react-redux';
import { addComment } from '../store/action/posts';
import { Dispatch } from 'redux';
interface CommentPayload {
  postID: number;
  comment:{
    nickname:string,
    comment?: string}
  // outras propriedades necessárias
}
interface Propscomment{
  name?:string,
  postID:number,
  onAddComment?: (data: CommentPayload) => void;

}

 class AddComp extends React.Component<Propscomment>{
  state={
    comment:'',
    editmode:false
  }
  handlraddComment = () => {
    if (this.props.onAddComment) { 
      this.props.onAddComment({
        postID: this.props.postID,
        comment: {
          nickname: this.props.name ?this.props.name:'Anonymous',
          comment: this.state.comment?this.state.comment:'nem comento'
        }
      });
      this.setState({comment:'',editmode:false})
    }
  };

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
const mapStateToProps = ({user}:{user:any}) => {
  return {
      
      name : user.name
  }
}
const mapDispatchToProps = (dispatch:Dispatch) => {
  return {
    onAddComment : (payload:any) => dispatch(addComment(payload))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddComp)