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
                    barStyle="light-content"
                    translucent={true}
                />
                <ScrollView contentContainerStyle={styles.content}  >
                     
                    <View style={styles.bottomView}>
<CalendarLovey/>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}