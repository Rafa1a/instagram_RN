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

export default class Addphoto extends React.Component{
    state = {
        image:{},
        comment:''
    }

    pickImage = async () => {

        await launchImageLibrary({
            mediaType: 'photo',
            maxHeight: 600,
            maxWidth: 800,
            
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
            
        }, res => {
            console.warn(res)
            if ( !res.didCancel && res.assets ) {
                console.warn('rafa')
                const selectedAsset = res.assets[0] as Asset;
                console.warn(selectedAsset)
                this.setState({ image: { uri: selectedAsset.uri, base64: selectedAsset.base64 } })
            }
        })
    }

  save = async () => {
    Alert.alert('Imagem adcionada!', this.state.comment)
  }
    render() {return(
        <ScrollView >
            <View style={styles.container}>
                <Text style={styles.title}>Compartilhe uma Imagem</Text>
                <View style={styles.imagecontainer}>
                    <Image source={this.state.image} style={styles.image}/>
                </View>
                <TouchableOpacity onPress={this.pickImage} style={styles.buttom}>
                    <Text style={styles.buttomtext}>Escolha a photo</Text>
                </TouchableOpacity>
                <TextInput placeholder='Algum comentário' style={styles.input} value={this.state.comment}
                onChangeText={comment => this.setState({comment})}
                />
                <TouchableOpacity onPress={this.save} style={styles.buttom}>
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
  }
});

