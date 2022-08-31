import {
    ScrollView,
    StatusBar,
    ImageBackground,
    Image
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { styles } from './style'
import bg from '../../../assets/img/bg.png'
import logo from 'app/assets/img/splash.png'
import AsyncStorage from '@react-native-async-storage/async-storage';


export function Splash(props) {
    let getData = async () => {
        let data = await AsyncStorage.getItem('key', (err, value) => {
            if (err) {
                console.log(err)
            } else {
            }
        })
        return JSON.parse(data)
    }

    useEffect(() => {
        navi()

    }, [])

    const navi = async () => {
        let getStarted = await getData()
        let timer = setTimeout(() => {
            getStarted === null ? props.navigation.navigate('GetStarted') :
                props.navigation.navigate('Login')
        }, 2000);
        return () => {
            clearTimeout(timer)
        }
    }

    return (
        <ScrollView contentContainerStyle={styles.content}>
            <StatusBar barStyle={'light-content'} showHideTransition={false} />
            {Platform.OS === 'android' && StatusBar.setBackgroundColor("rgba(0,0,0,0)")}
            {Platform.OS === 'android' && StatusBar.setTranslucent(true)}
            <ImageBackground source={bg} style={styles.bgImage}>
                <Image source={logo} style={styles.logo} />
            </ImageBackground>
        </ScrollView>
    )
}