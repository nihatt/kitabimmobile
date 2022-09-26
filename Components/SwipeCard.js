
import { StyleSheet, Text, View, StatusBar, Button, Image, ImageBackground ,TouchableOpacity} from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize
} from "react-native-responsive-dimensions";

import { useFonts } from 'expo-font';



export default function SwipeCard(props) {


    const [fontsLoaded] = useFonts({
        'Rubik-Dirt': require('../assets/fonts/RubikDirt-Regular.ttf'),
        'Anton-Regular':require('../assets/fonts/Anton-Regular.ttf'),
        'IndieFlower':require('../assets/fonts/IndieFlower-Regular.ttf'),
        'Pacifico-Regular':require('../assets/fonts/Pacifico-Regular.ttf'),
        'ShadowsIntoLight-Regular':require('../assets/fonts/ShadowsIntoLight-Regular.ttf'),
      });
     



    return (
        <TouchableOpacity activeOpacity={1} onPress={()=>props.navigation.navigate('DetailPage',{id:props.id,name:props.name,tarih1:props.tarih1,tarih2:props.tarih2,description:props.description,category:props.category})}>
        <ImageBackground imageStyle={{ borderRadius: 10 }} source={{ uri: "https://t3.ftcdn.net/jpg/02/94/42/08/360_F_294420853_ECBk3o4L4zBHTEb5u17mHhKhKTdpzWO4.jpg" }} resizeMode="stretch" blurRadius={10} style={{ justifyContent: 'center', width: responsiveScreenWidth(95), height: responsiveScreenHeight(10), alignSelf: 'center', marginTop: 20, elevation: 80 }}>
            <View style={styles.mainCard}>

                <View style={{ alignItems: 'center', width: responsiveScreenWidth(20), justifyContent: 'center', height: responsiveScreenHeight(10), marginTop: 0, padding: 0 }}>
                    <Text  style={{ textAlign: 'center', fontSize: 40,fontFamily:'Rubik-Dirt',color:'white' }}>{props.id}</Text>
                </View>
                <View style={{ width: responsiveScreenWidth(60), justifyContent: 'center', alignItems: 'center' }}>
                    <Text numberOfLines={1} style={{ alignSelf: 'center', fontSize: 25, lineHeight: 30,fontFamily:'IndieFlower' }}>{props.name}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <Text style={{fontFamily:'ShadowsIntoLight-Regular',fontSize:17}}>{props.tarih1} - </Text>
                        <Text style={{fontFamily:'ShadowsIntoLight-Regular',fontSize:17}}>{props.tarih2} </Text>
                    </View>

                </View>



            </View>

        </ImageBackground>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    mainCard: {

        height: responsiveScreenHeight(10),
        width: responsiveScreenWidth(95),
        alignSelf: 'center',
        borderRadius: 10,
        flex: 1,

        flexDirection: 'row',
        justifyContent: 'space-around',

    }
})