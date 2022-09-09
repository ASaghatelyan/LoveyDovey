import {
    View, Text, ScrollView,
    TouchableOpacity, StatusBar,
    ImageBackground, Image,
    SafeAreaView, SafeAreaProvider,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { styles } from './style'
import { BgImage, TabGlobalButton } from 'app/components'
import bg from 'app/assets/img/white.png'
import phone from 'app/assets/img/phone.png'
import pass from 'app/assets/img/pass.png'
import term from 'app/assets/img/term.png'
import logOut from 'app/assets/img/logOut.png'


export function SettingsScreen(props) {
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
                        <TabGlobalButton name="Contact Us" img={phone} />
                        <TabGlobalButton name="Love and Life" img={pass} />
                        <TabGlobalButton name="Change Password"  img={term}/>
                        <TabGlobalButton name="Terms & Condition" img={term}/>
                        <TabGlobalButton name="Intro Slides" img={term}/>
                        <TabGlobalButton name="Logout" img={logOut}/>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}