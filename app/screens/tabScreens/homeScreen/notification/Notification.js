import {
    View, Text, ScrollView,
    TouchableOpacity, StatusBar,
    ImageBackground, Image,
    SafeAreaView, SafeAreaProvider,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { styles } from './style'
import { BgImage } from 'app/components'
import { TextInput as PaperInput } from 'react-native-paper';

import bg from 'app/assets/img/white.png'
import back from 'app/assets/img/back.png'
import noData from 'app/assets/img/noData.png'
import loc from 'app/assets/img/loc.png'
import mess from 'app/assets/img/mess.png'
import { GlobalButton } from 'app/components/globalButton';


export function Notification(props) {
    return (
        <View style={{ flex: 1, height: '100%', backgroundColor: 'red' }}>
            <BgImage img={bg} />
            <SafeAreaView
                style={styles.mainContainer}>
                <StatusBar
                    animated={true}
                    barStyle='dark-content'
                    translucent={true}
                />
                <View style={styles.content}  >
                    <View style={styles.topTitle}>
                        <TouchableOpacity onPress={() => props.navigation.goBack()}>
                            <Image source={back} style={styles.back} />
                        </TouchableOpacity>
                        <View style={styles.gFlex}>
                            <Text style={styles.titleText}>Notifications</Text>
                        </View>
                    </View>
                </View>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    bounces={false}
                    contentContainerStyle={[styles.bottomView, true && { justifyContent: 'center', alignItems: 'center' }]}>
                    <View style={styles.noDataView}>
                        <Image source={noData} style={styles.noData} />
                        <Text style={styles.noDataText}>No data found</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}