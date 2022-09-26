
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AnimatedSplash from "react-native-animated-splash-screen";
import MainPage from './MainPage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font';
import useFontsx from '../Connections/Hooks';

export default function SplashScreen(props) {
  const Stack = createNativeStackNavigator();
  const [data, setData] = useState([])
  const [isdLoaded, setdisLoaded] = useState(false);



  const getData = async () => {

    try {

       let response = await fetch(
        'https://632cfb260d7928c7d2436b29.mockapi.io/kitabim/api/books',
      );
      let responseJson = await response.json();
      console.log(responseJson);
      setData(responseJson);

        setdisLoaded(true);

    
    

    } catch (error) {
      Alert.alert(error)
    }
  }




  useEffect(() => {
    getData();

  }, []);
  return (

    <AnimatedSplash
      translucent={true}
      isLoaded={isdLoaded}
      logoImage={require("../assets/kitabim.png")}
      backgroundColor={"#EAF0EE"}
      logoHeight={500}
      logoWidth={500}

    >
      <MainPage navigation={props.navigation} pendingData={data}></MainPage>
    </AnimatedSplash>
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