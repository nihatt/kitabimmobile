
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, ImageBackground, ScrollView } from 'react-native';
import AnimatedSplash from "react-native-animated-splash-screen";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize
} from "react-native-responsive-dimensions";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as Font from 'expo-font';

export default function DetailPage(props) {
  const bookId = props.route.params.id
  const bookName = props.route.params.name
  const tarih1 = props.route.params.tarih1
  const tarih2 = props.route.params.tarih2
  const description = props.route.params.description
  const category = props.route.params.category

  const [fontsLoaded] = useFonts({
    'Rubik-Dirt': require('../assets/fonts/RubikDirt-Regular.ttf'),
    'Anton-Regular': require('../assets/fonts/Anton-Regular.ttf'),
    'IndieFlower': require('../assets/fonts/IndieFlower-Regular.ttf'),
    'Pacifico-Regular': require('../assets/fonts/Pacifico-Regular.ttf'),
    'ShadowsIntoLight-Regular': require('../assets/fonts/ShadowsIntoLight-Regular.ttf'),
  });
  const uri = "https://img.freepik.com/premium-vector/girl-reading-book-tree-park-flat-vector-illustration-cheerful-female-character-headphones-sitting-grass-with-textbooks-backpack-doing-homework-youth-study-concept_74855-22473.jpg?w=2000";
  return (
    <ImageBackground imageStyle={{ height: responsiveScreenHeight(100), width: responsiveScreenWidth(100) }} source={{ uri: "https://img.freepik.com/premium-vector/girl-reading-book-tree-park-flat-vector-illustration-cheerful-female-character-headphones-sitting-grass-with-textbooks-backpack-doing-homework-youth-study-concept_74855-22473.jpg?w=2000" }} resizeMode="cover" blurRadius={3} style={{}}>

      <View style={{ height: responsiveScreenHeight(90),justifyContent:'space-evenly' }}>
      <View style={{height:responsiveScreenHeight(8),width:responsiveScreenWidth(30),marginLeft:20}}>
      <Button icon="arrow-left-circle" mode="contained" onPress={() => props.navigation.goBack()}>
    Geri Dön
  </Button>
        </View>
        <View style={{ justifyContent: 'space-between', paddingTop: responsiveScreenHeight(8), height: responsiveScreenHeight(60), width: responsiveScreenWidth(90), borderColor: 'blue', borderWidth: 2, borderRadius: 50, alignSelf: 'center', backgroundColor: 'white', opacity: 0.7 }}>
          <View style={{ height: responsiveScreenHeight(60) }}>
            <View style={{ flexDirection: 'column', alignSelf: 'center', height: responsiveScreenHeight(10),width:responsiveScreenWidth(80) }}>
              <ScrollView horizontal style={{alignSelf:'center'}}>
              <Text  numberOfLines={1} style={{fontFamily:'Rubik-Dirt', color: 'black', alignSelf: 'center', fontSize: 35 }}>{bookName}</Text>
              </ScrollView>
              <Text numberOfLines={1} style={{fontFamily:'Anton-Regular', color: 'black', fontWeight: 'bold', alignSelf: 'center' }}>{" " + category}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignSelf: 'center', height: responsiveScreenHeight(8) }}>
              <Text  style={{fontFamily:'Pacifico-Regular'}}>{tarih1} - </Text>
              <Text  style={{fontFamily:'Pacifico-Regular'}}>{tarih2}</Text>
            </View>
            <View style={{overflow:'hidden',height: responsiveScreenHeight(20), width: responsiveScreenWidth(80), alignSelf: 'center' ,borderColor:'white',borderWidth:2,borderRadius:50,padding:20}}>
              <ScrollView  >
                <Text style={{fontFamily:'Anton-Regular'}} >{description}</Text>
              </ScrollView>
            </View>


          </View>
        </View>

      </View>
    </ImageBackground>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});