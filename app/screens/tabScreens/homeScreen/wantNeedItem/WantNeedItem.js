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
import phone from 'app/assets/img/ph.png'
import loc from 'app/assets/img/loc.png'
import mess from 'app/assets/img/mess.png'
import { GlobalButton } from 'app/components/globalButton';
import gift from 'app/assets/img/gif.png'
import mes from 'app/assets/img/mes.png'
import time from 'app/assets/img/time.png'
import like from 'app/assets/img/like.png'
import love from 'app/assets/img/love.png'
import he from 'app/assets/img/he.png'
import mers from 'app/assets/img/mers.png'



export function WantNeedItem(props) {
    console.log(props.route.params);
    return (
        <View style={{ flex: 1, height: '100%' }}>
            <BgImage img={bg} />
            <SafeAreaView
                style={styles.mainContainer}>
                <StatusBar
                    animated={true}
                    barStyle='dark-content'
                    translucent={true} />
                <ScrollView contentContainerStyle={styles.content}  >
                    <View style={styles.topTitle}>
                        <TouchableOpacity onPress={() => props.navigation.goBack()}>
                            <Image source={back} style={styles.back} />
                        </TouchableOpacity>
                        <View style={styles.gFlex}>
                            <Text style={styles.titleText}>Want/Need</Text>
                        </View>
                    </View>
                    <View style={styles.bottomView}>
                        <Text style={styles.titleTop}>{props.route.params.title}</Text>
                        {props.route.params.data.map((item, index) => {
                            return (
                                <TouchableOpacity key={index}
                                    style={styles.itemView}
                                    onPress={() => props.navigation.navigate('WantNeedInfo',
                                    )}>
                                    <Text style={styles.title}>23 Sep, 2022</Text>
                                    <Image source={props.route.params.img} style={[styles.icon ]} />
                                </TouchableOpacity>)
                        })}
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}