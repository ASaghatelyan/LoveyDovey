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
import { WebView } from 'react-native-webview';


export function ShareScreen(props) {
    return (
        // <View style={{ flex: 1, height: '100%' }}>
        //     <BgImage img={bg} />
        //     <SafeAreaView
        //         style={styles.mainContainer}>
        //         <StatusBar
        //             // backgroundColor={'#FFF'}
        //             animated={true}
        //             // backgroundColor="transparent"
        //             barStyle='dark-content'
        //             translucent={true}
        //         />
        //         <ScrollView contentContainerStyle={styles.content}  >
        //             <Text style={styles.titleText}>Resources and Gifts</Text>
        //             <View style={styles.bottomView}>
        //                 <TabGlobalButton name="Love and Care" />
        //                 <TabGlobalButton name="Love and Life" />
        //                 <TabGlobalButton name="Men’s health : Get the blue pill and more" />
        //                 <TabGlobalButton name="The best-selling book on wants and needs" />
        //                 <TabGlobalButton name="Foreplay: A fun toy for her" />
        //                 <TabGlobalButton name="Online Sex Therapy Programs with Vanessa " />
        //                 <TabGlobalButton name="Talkspace : Online couples counseling" />
        //             </View>
        //         </ScrollView>
        //     </SafeAreaView>
           
        // </View>
        
    )
}