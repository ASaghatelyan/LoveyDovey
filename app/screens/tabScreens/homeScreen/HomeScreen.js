import {
    View, Text, ScrollView,
    TouchableOpacity, StatusBar,
    ImageBackground, Image,
    SafeAreaView, SafeAreaProvider,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { styles } from './style'
import { BgImage } from 'app/components'
import bg from 'app/assets/img/white.png'
import noti from 'app/assets/img/notification.png'
import user from 'app/assets/img/user.png'
import refresh from 'app/assets/img/refresh.png'

export function HomeScreen(props) {
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
                    <View style={styles.titleView}>
                        <Text style={styles.titleText}>Home</Text>
                        <View style={styles.gFlex}>
                            <TouchableOpacity>
                                <Image source={user} style={styles.img} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image source={refresh} style={styles.img2} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image source={noti} style={styles.img3} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.bottomView}> 
                    </View>

                </ScrollView>
            </SafeAreaView>
        </View>
    )
}