import React from 'react';
import type {PropsWithChildren} from 'react';
import {
    FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Post from '../components/Post';
import { fetchPosts } from '../store/action/posts';

 class Feed extends React.Component<any>{
    componentDidMount = () => {
        this.props.onFetchPosts()
    }
    

  render() {
    
    return(
    <SafeAreaView style={styles.container}>
        <Header />
        <FlatList 
            data={this.props.posts}
            keyExtractor={item => `${item.id}`}
            renderItem={({item}) => 
        <Post key={item.id} {...item}/>}
        />
    </SafeAreaView>
  );}
}

const styles = StyleSheet.create({
  container: {
  flex:1,
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'rgb(218, 218, 218)'
  },
  
});

const mapStateToProps = ({posts}: {posts:any}) => {
  return{
    posts:posts.posts
  }
}
const mapDispatchToProps = (dispatch:any) => { 
  return{
  onFetchPosts: () => dispatch(fetchPosts())
  }
 
}
export default connect(mapStateToProps,mapDispatchToProps)(Feed)