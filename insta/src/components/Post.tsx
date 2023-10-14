import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image
} from 'react-native';
import Author from './Author'
import Comments from './Comments';
import Addcoment from './AddComments'

interface Comment {
    nickname: string;
    comment: string;
  }
  
  interface PostProps {
    id:number;
    nickname:string;
    email:string
    image: any;
    comments: Comment[];
  }
  
export default class Post extends React.Component<PostProps>{
  


  render() {return(
    <SafeAreaView style={styles.container}>
        <Image source={this.props.image} style={styles.image}/>
        <Author nickname={this.props.nickname} email={this.props.email} />
        <Comments comments={this.props.comments}/>
        <Addcoment/>
    </SafeAreaView>
  );}
}

const styles = StyleSheet.create({
  container: {
   flex:1
  },
  image: {
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').width * 3/4,
    resizeMode:'contain'
  },

});

