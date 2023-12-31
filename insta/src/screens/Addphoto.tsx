import React from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';
import { Image } from 'react-native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Alert,
  Platform
} from 'react-native';

import {launchCamera, launchImageLibrary, ImageLibraryOptions,Asset} from 'react-native-image-picker';

import { addPost } from '../store/action/posts';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
///////////////////////////////////////////////////////////////////
const noUser ='Você precisa estar logado para adicionar imagens'
///////////////////////////////////////////////////////////////////
 class Addphoto extends React.Component<any>{
    state = {
        image:require('../assets/imgs/suaimagem.jpg'),
        comment:''
    }
    componentDidUpdate = (prevProps:any) => {
      console.log(prevProps)
        if(prevProps.loading && !this.props.loading){
          this.setState({
            image:require('../assets/imgs/suaimagem.jpg'),
            comment:''
          })
          this.props.navigation.navigate('Feed')
        }
    }
    pickImage = async () => {

        
        await launchImageLibrary({
            mediaType: 'photo',
            maxHeight: 600,
            maxWidth: 800,
            includeBase64: true
            
        }, res => {
            if (res && !res.didCancel && res.assets && res.assets.length > 0) {
                const selectedAsset = res.assets[0] as Asset;
                this.setState({ image: { uri: selectedAsset.uri, base64: selectedAsset.base64 } })
            }
        })
    }
    pickImagecamera = async () => {
        
      
        await launchCamera({
            mediaType: 'photo',
            saveToPhotos:false,
            cameraType:'front',
            quality:1,
            includeBase64: true
            
        }, res => {
            
            if ( !res.didCancel && res.assets ) {
                
                const selectedAsset = res.assets[0] as Asset;
                
                this.setState({ image: { uri: selectedAsset.uri, base64: selectedAsset.base64 } })
            }
        })
    }
  Al = () => {
    if (!this.props.name)  {
      Alert.alert('Falha!', noUser)
      return
    }
      Alert.alert('Escolha', 'Escolha a Origem imagem', [
        {
          text:'Arquivo',
          onPress:this.pickImage
        },
        {
          text:'Camera',
          onPress:this.pickImagecamera
        }
      ])
    }

  save = async () => {
    if (!this.props.name)  {
      Alert.alert('Falha!', noUser)
      return
    } 
    this.props.onAddPost({
       id:Math.random(),
       nickname: this.props.name,
       email:this.props.email,
       image: this.state.image,
       comments: [{
          nickname: this.props.name,
          comment : this.state.comment
       }]
    })
    

  }
    render() {return(
        <ScrollView >
            <View style={styles.container}>
                <Text style={styles.title}>Compartilhe uma Imagem</Text>
                <View style={styles.imagecontainer}>
                    <Image source={this.state.image} style={styles.image}/>
                </View>
                <TouchableOpacity onPress={this.Al} style={styles.buttom}>
                    <Text style={styles.buttomtext}>Escolha a photo</Text>
                </TouchableOpacity>
                <TextInput placeholder='Algum comentário' style={styles.input} value={this.state.comment}
                onChangeText={comment => this.setState({comment})} editable={this.props.name?true:false}
                />
                <TouchableOpacity onPress={this.save} style={[styles.buttom,this.props.loading?styles.buttonDisabled:null]}
                disabled={this.props.loading}>
                    <Text style={styles.buttomtext}>Salvar</Text>
            </TouchableOpacity>
            </View>
        </ScrollView>

        
    );}
}

const styles = StyleSheet.create({
    container: {
        flex:1,alignItems:'center'
  },
  title: {
    fontSize:20,
    marginTop:Platform.OS ==='ios'? 30 :10,
    fontWeight:'bold'
  },
  imagecontainer: {
    width:'90%',
    height:Dimensions.get('window').width /2,
    backgroundColor:'#eee',
    marginTop:10
  },
  image: {
    width:"100%",
    height:Dimensions.get('window').width/2,
    resizeMode:'center'
  },
  buttom: {
    marginTop:30,
    padding:10,
    backgroundColor:'#4286f4'
  },
  buttomtext:{
    fontSize:20,
    color:'#fff'
  },
  input:{
    marginTop:20,
    width:'90%'
  },
  buttonDisabled:{
    backgroundColor:'#aaa'
  }
});

const mapStateToProps = ({user,posts}: {user:any,posts:any}) => {
  return{
    email:user.email,
    name: user.name,
    loading:posts.isUploading
  }
}

const mapDispatchToPros  = (dispatch:Dispatch) => {
  return {
    onAddPost : (post:any) => dispatch(addPost(post))
  }
}

export default connect(mapStateToProps,mapDispatchToPros)(Addphoto)