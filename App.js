
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AnimatedSplash from "react-native-animated-splash-screen";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './Pages/SplashScreen';
import MainPage from './Pages/MainPage';
import AddPage from './Pages/AddPage';
import DetailPage from './Pages/DetailPage';
import { Header } from 'react-native/Libraries/NewAppScreen';
import useFontsx from './Connections/Hooks'
import AppLoading from 'expo-app-loading';
export default function App() {
  const Stack = createNativeStackNavigator();
  const [data, setData] = useState([])
  const [isdLoaded, setdisLoaded] = useState(false);
  const [IsReady, SetIsReady] = useState(false);
  const image = { uri: "https://docs.expo.dev/static/images/tutorial/splash.png" };

  const LoadFonts = async () => {
      await useFontsx();
    };
  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => {}}
      />
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="AddPage" component={AddPage} />
        <Stack.Screen name="DetailPage" component={DetailPage} />
      </Stack.Navigator>
    </NavigationContainer>

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