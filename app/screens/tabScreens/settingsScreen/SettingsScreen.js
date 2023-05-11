import {
    View, Text, ScrollView,
    TouchableOpacity, StatusBar,
    ImageBackground, Image,
    SafeAreaView, SafeAreaProvider,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { styles } from './style'
import { BgImage, DeleteAccount, LogOutModal, TabGlobalButton } from 'app/components'
import bg from 'app/assets/img/white.png'
import phone from 'app/assets/img/phone.png'
import pass from 'app/assets/img/pass.png'
import term from 'app/assets/img/term.png'
import logOut from 'app/assets/img/logOut.png'
import Delete from 'app/assets/img/delete.png'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axiosInstance from 'app/networking/api'
import { useDispatch } from 'react-redux'

export function SettingsScreen(props) {
    let dispatch = useDispatch()
    const [modatlVisible, setModalVisible] = useState(false)
    const [deletModal, setDeletModal] = useState(false)

    const onDeleteAccount = async () => {
        try {
            dispatch({
                type: "SET_CUSTOMER",
                payload: {},
            });
            await axiosInstance.post(`user/delete`)
            await AsyncStorage.removeItem("token")
            setDeletModal(false)
            props.navigation.replace('StackNavigation', { screen: 'Login' })
        } catch (e) {
            setDeletModal(false)
        }
    }

    const onLogout = async () => {
        try {
            dispatch({
                type: "SET_CUSTOMER",
                payload: {},
            });
            await axiosInstance.get(`user/logout`)
            await AsyncStorage.removeItem("token")
            setDeletModal(false) 
            props.navigation.replace('StackNavigation', { screen: 'Login' })
            await AsyncStorage.removeItem("token")
        } catch (e) {
            setDeletModal(false)
        }
    }
    return (
        <View style={{ flex: 1, height: '100%' }}>
            <BgImage img={bg} />
            <SafeAreaView
                style={styles.mainContainer}>
                <StatusBar
                    // backgroundColor={'#FFF'}
                    animated={true}
                    // backgroundColor="transparent"
                    barStyle='dark-content'
                    translucent={true}
                />
                <ScrollView contentContainerStyle={styles.content}  >
                    <Text style={styles.titleText}>Settings</Text>
                    <View style={styles.bottomView}>
                        <TabGlobalButton name="Contact Us" img={phone} onPush={() => (props.navigation.navigate('ContactUs'))} />
                        <TabGlobalButton name="Change Password" img={pass} onPush={() => (props.navigation.navigate('ChangePasswird'))} />
                        <TabGlobalButton name="Terms & Condition" img={term} onPush={() => (props.navigation.navigate('TermsCondition'))} />
                        <TabGlobalButton name="Privacy Policy" img={term} onPush={() => (props.navigation.navigate('PrivacyPolicy'))} />
                        <TabGlobalButton name="Intro Slides" img={term} props={props} onPush={() => (props.navigation.navigate('IntroSlides'))} />
                        <TabGlobalButton name="Delete Account" img={Delete} props={props} onPush={async () => {
                            await AsyncStorage.removeItem('user')
                            await AsyncStorage.removeItem('partner')
                            setDeletModal(!deletModal)
                        }} />
                        <TabGlobalButton name="Log out" img={logOut} onPush={async () => {
                          
                            setModalVisible(!modatlVisible)
                        }} />
                    </View>
                </ScrollView>
            </SafeAreaView>
            <DeleteAccount
                isVisible={deletModal}
                onClose={() => setDeletModal(!deletModal)}
                onDelete={onDeleteAccount} />
            <LogOutModal isVisible={modatlVisible}
                onClose={() => setModalVisible(!modatlVisible)}
                onLogOut={onLogout}
            />
        </View>
    )
}