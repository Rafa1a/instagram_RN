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
import { connect } from 'react-redux';
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
    name?:string
  }
  
 class Post extends React.Component<PostProps>{
  


  render() {
    const addComment = this.props.name?<Addcoment postID={this.props.id} />:null
    return(
    <SafeAreaView style={styles.container}>
        <Image source={{uri: this.props.image}} style={styles.image}/>
        <Author nickname={this.props.nickname} email={this.props.email} />
        <Comments comments={this.props.comments}/>
        {addComment}
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

const mapStateToProps = ({user}:{user:any}) => {
  return {
      
      name : user.name
  }
}
export default connect(mapStateToProps)(Post)