
import { StyleSheet, Text, View, StatusBar, TouchableHighlight, TouchableOpacity, ImageBackground, Image, Button, RefreshControl } from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize
} from "react-native-responsive-dimensions";

import SwipeCard from '../Components/SwipeCard';
import { SwipeListView } from 'react-native-swipe-list-view';
import React, { useState, useEffect, useCallback } from 'react';
import RNShake from 'react-native-shake';
import Ionicons from '@expo/vector-icons/Ionicons';
export default function MainPage(props, { navigation }) {
    const [refreshing, setRefreshing] = useState(false);
    const incomingData = props.pendingData;
    const [listData, setListData] = useState(
        Array(4)
            .fill('')
            .map((_, i) => ({ key: `${i}`, text: `item #${i}` }))
    );
    useEffect(() => {
        onRefresh();
        deleteRow();
    }, []);

    const onRefresh = useCallback(async () => {
        setRefreshing(true);

        try {
            let response = await fetch(
                'https://632cfb260d7928c7d2436b29.mockapi.io/kitabim/api/books',
            );
            let responseJson = await response.json();
            setListData(responseJson);
            setRefreshing(false)
        } catch (error) {
            Alert.alert(error)
        }
    }, [refreshing]);

    const updateRow = ( rowKey, id,name,tarih1,tarih2,description,category) => {
        console.log(rowKey+name+tarih1+description+category);
        props.navigation.navigate("AddPage", { fromUpdate:true,id: id, name: name, tarih1: tarih1, tarih2: tarih2, description: description, category: category })
    };
    const deleteRow = async (rowMap, rowKey) => {

        const url = "https://632cfb260d7928c7d2436b29.mockapi.io/kitabim/api/books/"
        try {
            fetch(url + rowKey, {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
                .then(response => response.json())
                .then(json => { console.log(json), onRefresh() });

        } catch (error) {
            Alert.alert(error + "API Error")
        }
    };

    const onRowDidOpen = rowKey => {

    };


    const renderHiddenItem = (data, rowMap) => (
        <View style={styles.rowBack}>

            <TouchableOpacity
                style={[styles.backRightBtn, styles.backRightBtnLeft]}
                onPress={() => updateRow(rowMap, data.item.id, data.item.bookName,data.item.startDate,data.item.finishDate,data.item.bookDescription,data.item.bookCategory)}
            >
                <Text style={styles.backTextWhite}>Güncelle</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.backRightBtn, styles.backRightBtnRight]}
                onPress={() => deleteRow(rowMap, data.item.id)}
            >
                <Text style={styles.backTextWhite}>Sil</Text>
            </TouchableOpacity>
        </View>
    );

    const renderFocusItem = (data, rowMap) => {

        return <SwipeCard navigation={props.navigation} id={data.item.id} name={data.item.bookName} tarih1={data.item.startDate} tarih2={data.item.finishDate} description={data.item.bookDescription} category={data.item.bookCategory}></SwipeCard>

    }
    return (
        <View >
            <ImageBackground imageStyle={{ height: responsiveScreenHeight(50), width: responsiveScreenWidth(100) }} source={{ uri: "https://bookriot.com/wp-content/uploads/2021/04/free-comics-online-1280x720.png" }} resizeMode="stretch" blurRadius={8} style={{ marginTop: StatusBar.currentHeight }}>


                <View style={{ height: responsiveScreenHeight(25), justifyContent: 'center' }}>
                    <Image
                        style={{ height: responsiveHeight(20), width: responsiveScreenWidth(90), alignSelf: 'center', resizeMode: 'stretch' }}
                        source={require('../assets/kitabim3.png')}
                    />
                </View>

                <View style={{ backgroundColor: 'white', height: responsiveScreenHeight(67), width: responsiveWidth(100), borderTopLeftRadius: 50, borderTopRightRadius: 50 }}>
                    <SwipeListView
                        refreshControl={
                            <RefreshControl
                                refreshing={refreshing}
                                onRefresh={onRefresh}
                            />
                        }
                        style={{ marginTop: 25, maxHeight: responsiveScreenHeight(70), marginBottom: 10 }}
                        data={listData}
                        renderItem={renderFocusItem}
                        renderHiddenItem={renderHiddenItem}
                        leftOpenValue={100}
                        rightOpenValue={-100}
                        previewRowKey={'0'}
                        previewOpenValue={-100}
                        previewOpenDelay={50}
                        onRowDidOpen={onRowDidOpen}
                    />

                </View>


            </ImageBackground>
            <TouchableOpacity onPress={() => props.navigation.navigate('AddPage',{fromUpdate:false})} style={{ width: 80, height: 80, borderRadius: 50, backgroundColor: '#ee6e73', position: 'absolute', bottom: 50, right: 10, justifyContent: 'center' }}>
                <Ionicons name="book" size={50} color="white" style={{ alignSelf: 'center' }} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    backTextWhite: {
        color: '#FFF',
    },
    rowFront: {
        alignItems: 'center',
        backgroundColor: '#CCC',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        justifyContent: 'center',
        height: responsiveScreenHeight(10),
    },
    rowBack: {

        width: responsiveScreenWidth(90),
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 30,
        alignItems: 'center',


        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 0,
    },
    backRightBtn: {
        height: 70,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',



        width: 80,
    },
    backRightBtnLeft: {
        backgroundColor: 'green',
        right: 0,
        borderRadius: 10,
    },
    backRightBtnRight: {
        backgroundColor: 'red',
        right: 0,
        borderRadius: 10,
    },
});
