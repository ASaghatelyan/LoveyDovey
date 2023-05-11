import {
    View, Text, ScrollView,
    TouchableOpacity, StatusBar,
    ImageBackground, Image,
    SafeAreaView, SafeAreaProvider,Linking 
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { styles } from './style'
import { BgImage, TabGlobalButton } from 'app/components'
import bg from 'app/assets/img/white.png' 


export function ShareScreen(props) {
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
                        <TabGlobalButton name="Love and Care" onPush={()=>{ Linking.openURL('https://www.gottman.com/blog/')}} />
                        <TabGlobalButton name="Love and Life" onPush={()=>{ Linking.openURL('https://loveandlifetoolbox.com/ ')}} />
                        <TabGlobalButton name="Men’s health : Get the blue pill and more" onPush={()=>{ Linking.openURL('https://forhims.com/  ')}}/>
                          <TabGlobalButton name="Online Sex Therapy Programs with Vanessa " onPush={()=>{ Linking.openURL('https://vmtherapy.com/online-sex-therapy-programs/ ')}}/>
                        <TabGlobalButton name="Talkspace : Online couples counseling" onPush={()=>{ Linking.openURL('https://try.talkspace.com/couples?utm_source=google&utm_medium=semnb&utm_campaign=Search_Google_NB_Couples_tCPA_Control&utm_content=FEB2020-40P-V2-CAPS&utm_term=online%20couples%20counseling&gclid=Cj0KCQjwktKFBhCkARIsAJeDT0i1mlbdWlgxlSXiImlDYmCu1NFhG7dxpO ')}}/>
                    </View>
                </ScrollView>
            </SafeAreaView>
           
        </View>
    )
}