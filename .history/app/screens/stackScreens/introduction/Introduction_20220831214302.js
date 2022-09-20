import { View, Text, ScrollView, TouchableOpacity, Image, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { styles } from './style'
import { IntroFour, IntroOne, IntroThree, IntroTwo } from 'app/components'
import AsyncStorage from '@react-native-async-storage/async-storage';

import left from 'app/assets/img/left.png'
import right from 'app/assets/img/right.png'
import cycle from 'app/assets/img/cycle.png'
import cycleC from 'app/assets/img/colorCycle.png'

export function Introduction(props) {
    const [count, setCount] = useState(1);
    const cycleIc = [
        {
            img: cycle,
            num: 1
        },
        {
            img: cycle,
            num: 2
        },
        {
            img: cycle,
            num: 3
        },
        {
            img: cycle,
            num: 4
        },
    ]

    const incriment = () => {
        cycleIc.length + 1 > count && setCount(prev => prev + 1)
    }

    const decriment = () => {
        count > 1 && setCount(prev => prev - 1)
    }

    let handleAsync = async () => {
        await AsyncStorage.setItem('intro', JSON.stringify(true))
        return props.navigation.replace('Registration')
    }

    const navi = () => {
        switch (count) {
            case 1:
                return <IntroOne />;
            case 2:
                return <IntroTwo />;
            case 3:
                return <IntroThree />;
            case 4:
                return <IntroFour />;
            case 5:
                return handleAsync();
        }
    }
    return (
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
            <StatusBar barStyle={'dark-content'} showHideTransition={false} translucent />
            {Platform.OS === 'android' && StatusBar.setBackgroundColor("rgba(0,0,0,0)")}
            {Platform.OS === 'android' && StatusBar.setTranslucent(true)}
            <TouchableOpacity style={styles.skipView}>
                <Text style={styles.skipText}>Skip</Text>
            </TouchableOpacity>
            <View style={{ marginTop: 200, paddingHorizontal: 25, flex: 1, justifyContent: 'flex-end' }}>
                {navi()}
            </View>
            <View style={styles.bottomView}>
                <TouchableOpacity onPress={decriment}   >
                    <Image source={left} style={styles.icon} />
                </TouchableOpacity>
                <View style={{ flexDirection: 'row' }}>

                    {cycleIc.map((item, index) => {
                        return (
                            item.num === count ? <Image key={index} source={cycleC} style={styles.cycle} /> :
                                <Image key={index} source={item.img} style={styles.cycle} />)
                    })}
                </View>
                <TouchableOpacity onPress={incriment}  >
                    <Image source={right} style={styles.icon} />
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}