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
                        <TabGlobalButton name="The best-selling book on wants and needs" onPush={()=>{ Linking.openURL('amazon.com/Love-Languages-Secret-that-Lasts/dp/080241270X ')}}/>
                        <TabGlobalButton name="Foreplay: A fun toy for her" onPush={()=>{ Linking.openURL(' https://www.amazon.com/Ding-Beautiful-Frequency-Satisfying-Comfortable/dp/B08LYTZYM9/ref=sr_1_2?crid=3O9NV1NJKJH5R&dchild=1&keywords=satisfyer+pro+2+air-pulse+for+women&qid=1621461478&sprefix=satis%2Caps%2C223&sr=8-2')}}/>
                        <TabGlobalButton name="Online Sex Therapy Programs with Vanessa " onPush={()=>{ Linking.openURL('https://vmtherapy.com/online-sex-therapy-programs/ ')}}/>
                        <TabGlobalButton name="Talkspace : Online couples counseling" onPush={()=>{ Linking.openURL(' ')}}/>
                    </View>
                </ScrollView>
            </SafeAreaView>
           
        </View>
    )
}