import {
    View, Text, ScrollView,
    TouchableOpacity, StatusBar,
    ImageBackground, Image,
    SafeAreaView, SafeAreaProvider,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { styles } from './style'
import { BgImage, CalendarLovey } from 'app/components'
import bg from 'app/assets/img/white.png'
import noti from 'app/assets/img/search.png'
import user from 'app/assets/img/info.png'
import calendarInfo from 'app/assets/img/calendarInfo.png'

export function CreateEvent(props) {
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
                        <Text style={styles.titleText}>Calendar</Text>
                        <View style={styles.gFlex}>
                            <TouchableOpacity>
                                <Image source={user} style={styles.img} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image source={calendarInfo} style={styles.img2} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image source={noti} style={styles.img3} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View >
                        <CalendarLovey onNavi={(day)=>props.navigation.navigate('AddEvent',{day})}/> 
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}