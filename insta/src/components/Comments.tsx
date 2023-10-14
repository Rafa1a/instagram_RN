import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
//////////////////////////
interface comment {
    nickname:String
    comment:string
}
interface propscomp {
  comments:comment[]
}
////////////////////////////////
export default class Comments extends React.Component<propscomp>{
  

  render() {
   
    let view =null
    if(this.props.comments) {
      view=this.props.comments.map((item,index) => {
        return (
          <SafeAreaView style={styles.commentcontainer} key={index}>
            <Text style={styles.nickname}>{item.nickname}</Text>
            <Text style={styles.comment}>{item.comment}</Text>

          </SafeAreaView>
        )
      })
        
    }
    return (
      <View style={styles.container}>
        {view}
      </View>
    )
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    margin:10
  },
  commentcontainer: {
    flexDirection:'row',
    marginTop:5
  },
  nickname: {
    marginLeft:5,
    fontWeight:'bold',
    color:'#444'
  },
  comment: {
    marginHorizontal:10,
    color:'#555'
  },
});

