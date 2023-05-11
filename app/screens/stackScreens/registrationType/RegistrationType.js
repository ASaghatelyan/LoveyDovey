import {
    View, Text, ScrollView,
    TouchableOpacity, StatusBar,
    ImageBackground, Image,
    Platform, SafeAreaView
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { styles } from './style'
import bg from '../../../assets/img/signUp.jpg'
import logo from 'app/assets/img/logo.png'
import back from 'app/assets/img/back.png'


export function RegistrationType(props) {
    return (
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}
            bounces={false}>
            <StatusBar barStyle={'light-content'} showHideTransition={false} translucent />
            {Platform.OS === 'android' && StatusBar.setBackgroundColor("rgba(0,0,0,0)")}
            {Platform.OS === 'android' && StatusBar.setTranslucent(true)}
            <ImageBackground source={bg} style={styles.bgImage}>
                <TouchableOpacity style={styles.btnView}  onPress={()=>props.navigation.goBack()}>
                    <Image source={back} style={styles.backBtn} />
                </TouchableOpacity>
                <Image source={logo} style={styles.logo} />
                <Text style={styles.signUpText}>Sign up</Text>
                <View style={styles.bottomView}>

                    <TouchableOpacity style={styles.itemView} onPress={() => { props.navigation.navigate('Registration') }}>
                        <Text style={styles.itemText}>As a new user</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itemView} onPress={() => { props.navigation.navigate('RegistrInviter') }}>
                        <Text style={styles.itemText}>Via Invitation Code</Text>
                    </TouchableOpacity>


                </View>
            </ImageBackground>
        </ScrollView>
    )
}