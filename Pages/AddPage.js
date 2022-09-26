
import React, { useState } from "react";
import {ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  ImageBackground,
  Alert,
  TouchableOpacity,
} from "react-native";
import AppLoading from 'expo-app-loading';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize
} from "react-native-responsive-dimensions";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { useFonts } from 'expo-font';
import * as Font from 'expo-font';
import { TextInput,  Button } from 'react-native-paper';

 
export default function AddPage(props) {
  const [IsReady, SetIsReady] = useState(false);
  const image = { uri: "https://docs.expo.dev/static/images/tutorial/splash.png" };
  const isUpdate =props.route.params.fromUpdate
  const bookId = props.route.params.id
  const name = props.route.params.name
  const tarih1 = props.route.params.tarih1
  const tarih2 = props.route.params.tarih2
  const descold = props.route.params.description
  const categoryBook = props.route.params.category


  const [fontsLoaded] = useFonts({
      'Rubik-Dirt': require('../assets/fonts/RubikDirt-Regular.ttf'),
      'Anton-Regular':require('../assets/fonts/Anton-Regular.ttf'),
      'IndieFlower':require('../assets/fonts/IndieFlower-Regular.ttf'),
      'Pacifico-Regular':require('../assets/fonts/Pacifico-Regular.ttf'),
      'ShadowsIntoLight-Regular':require('../assets/fonts/ShadowsIntoLight-Regular.ttf'),
    });
   
 const uri= "https://img.freepik.com/free-vector/flat-comic-style-background-copy-space_52683-54924.jpg?w=2000";

  const [bookName, setbookName] = useState(isUpdate ? name :"");
  const [startDate, setstartDate] = useState(isUpdate ? tarih1 :"");
  const [finishDate, setfinishDate] = useState(isUpdate ? tarih2 :"");
  const [category, setCategory] = useState(isUpdate ? categoryBook :"");
  const [description, setDescription] = useState(isUpdate ? descold :"");
 

  const bookHandler = async () => {
    if (bookName == '' || startDate == '' || finishDate == '' || category == ''  || description == '') {
        Alert.alert("Alanlarda hata gözüküyor , lütfen tekrar deneyiniz")
    }
    else {

    if(isUpdate){
      try {
        fetch("https://632cfb260d7928c7d2436b29.mockapi.io/kitabim/api/books/"+bookId, {
            method: "PUT",
            body: JSON.stringify({
                "bookName": bookName,
                "startDate": startDate,
                "finishDate": finishDate,
                "bookCategory": category,
                "bookDescription": description,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => console.log(json));
        props.navigation.navigate('MainPage');
    } catch (error) {
        Alert.alert(error + "API Error")
    }
    }else{
        try {
            fetch("https://632cfb260d7928c7d2436b29.mockapi.io/kitabim/api/books/", {
                method: "POST",
                body: JSON.stringify({
                    "bookName": bookName,
                    "startDate": startDate,
                    "finishDate": finishDate,
                    "bookCategory": category,
                    "bookDescription": description,
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
                .then(response => response.json())
                .then(json => console.log(json));
            props.navigation.navigate('MainPage');
        } catch (error) {
            Alert.alert(error + "API Error")
        }}
    }

}








  return (
    <ImageBackground imageStyle={{ borderRadius: 10 }} source={{ uri: "https://img.freepik.com/free-vector/flat-comic-style-background-copy-space_52683-54924.jpg?w=2000" }} resizeMode="cover" blurRadius={10} style={{ justifyContent: 'center', width: responsiveScreenWidth(110), height: responsiveScreenHeight(95), alignSelf: 'center', marginTop: 20, elevation: 80 }}>

    <View style={{height:responsiveScreenHeight(90),marginTop:StatusBar.currentHeight}}>
 
    <View style={{height:responsiveScreenHeight(8),width:responsiveScreenWidth(30),marginLeft:20}}>
      <Button icon="arrow-left-circle" mode="contained" onPress={() => props.navigation.goBack()}>
    Geri Dön
  </Button>
        </View>
      <Text numberOfLines={1} style={{alignSelf:'center',fontFamily:'IndieFlower',fontSize:35,marginTop:20,color:'purple'}}>Yeni bir kitabını ekle</Text>
      <View style={{height:responsiveScreenHeight(70),width:responsiveScreenWidth(85),alignSelf:'center',justifyContent:'space-around'}}>
      <TextInput
      mode="outlined"
      label="Kitap Adı"
      value={bookName}
      onChangeText={bookName => setbookName(bookName)}
    />
        <TextInput
        mode="outlined"
      label="Başlama Tarihin"
      value={startDate}
      onChangeText={startDate => setstartDate(startDate)}
    />
        <TextInput
        mode="outlined"
      label="Bitirme Tarihin"
      value={finishDate}
      onChangeText={finishDate => setfinishDate(finishDate)}
    />
        <TextInput
        mode="outlined"
      label="Kategori"
      value={category}
      onChangeText={category => setCategory(category)}
    />
        <TextInput
        multiline
        numberOfLines={10}
        mode="outlined"
      label="Özetin"
      value={description}
      onChangeText={description => setDescription(description)}
    />
      <Button tex icon="file-plus" mode="contained" onPress={() => bookHandler()}>
    {isUpdate ? "Şimdi Güncelle" : "Haydi Ekleyelim"}
  </Button>
      </View>
      
    </View>

    </ImageBackground>

  );
}
 
const styles = StyleSheet.create({

});