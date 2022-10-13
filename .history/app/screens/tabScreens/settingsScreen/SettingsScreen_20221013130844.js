import {
    View, Text, ScrollView,
    TouchableOpacity, StatusBar,
    ImageBackground, Image,
    SafeAreaView, SafeAreaProvider,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { styles } from './style'
import { BgImage, LogOutModal, TabGlobalButton } from 'app/components'
import bg from 'app/assets/img/white.png'
import phone from 'app/assets/img/phone.png'
import pass from 'app/assets/img/pass.png'
import term from 'app/assets/img/term.png'
import logOut from 'app/assets/img/logOut.png'
import AsyncStorage from '@react-native-async-storage/async-storage'


export function SettingsScreen(props) {
    const [modatlVisible, setModalVisible] = useState(false)
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
                    <Text style={styles.titleText}>Resources and Gifts</Text>
                    <View style={styles.bottomView}>
                        <TabGlobalButton name="Contact Us" img={phone} onPush={() => console.log(props.navigation.navigate('ContactUs'))} />
                        <TabGlobalButton name="Change Password" img={pass} onPush={() => console.log(props.navigation.navigate('ChangePasswird'))} />
                        <TabGlobalButton name="Terms & Condition" img={term} onPush={() => console.log(props.navigation.navigate('TermsCondition'))} />
                        <TabGlobalButton name="Privacy Policy" img={term} onPush={() => console.log(props.navigation.navigate('PrivacyPolicy'))} />
                        <TabGlobalButton name="Intro Slides" img={term} props={props} onPush={() => console.log(props.navigation.navigate('IntroSlides'))} />
                        <TabGlobalButton name="Logout" img={logOut} onPush={async() => {
                            await AsyncStorage.removeItem('user')
                            await AsyncStorage.removeItem('partner')
                            setModalVisible(!modatlVisible)}} />
                    </View>
                </ScrollView>
            </SafeAreaView>
            <LogOutModal isVisible={modatlVisible}
                onClose={() => setModalVisible(!modatlVisible)}
                onLogOut={async () => {  
                    setModalVisible(!modatlVisible)
                    props.navigation.replace( 'StackNavigation' , {screen:'Login'})
                    await AsyncStorage.removeItem("token")
                }}
            />
        </View>
    )
}