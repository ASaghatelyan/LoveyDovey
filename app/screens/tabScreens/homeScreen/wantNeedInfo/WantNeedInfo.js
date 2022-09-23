import {
    View, Text, ScrollView,
    TouchableOpacity, StatusBar,
    ImageBackground, Image,
    SafeAreaView, SafeAreaProvider,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { styles } from './style'
import { BgImage, TabGlobalButton } from 'app/components'
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
import moment from 'moment'


export function WantNeedInfo(props) {
    const [text, setText] = useState("");
    return (
        <View style={{ flex: 1, height: '100%' }}>
            <BgImage img={bg} />
            <SafeAreaView
                style={styles.mainContainer}>
                <StatusBar
                    animated={true}
                    barStyle='dark-content'
                    translucent={true}
                />
                <ScrollView contentContainerStyle={styles.content}  >
                    <View style={styles.topTitle}>
                        <TouchableOpacity onPress={() => props.navigation.goBack()}>
                            <Image source={back} style={styles.back} />
                        </TouchableOpacity>
                        <View style={styles.gFlex}>
                            <Text style={styles.titleText}>Want/Need</Text>
                        </View>
                    </View>
                    <ScrollView contentContainerStyle={[styles.content, { paddingHorizontal: 16 }]}  >
                        <View>
                            <TabGlobalButton name="Select Category" 
                                onPush={() => setMOdalVisible(!modalVisible)}
                            />
                            <PaperInput
                                label="Desgription"
                                value={text}
                                onChangeText={text => setText(text)}
                                style={styles.description}
                                theme={{
                                    colors: {
                                        placeholder: '#FFF', text: '#FFF', primary: '#484545',
                                    },
                                    fonts: { regular: 'Roboto-Regular' }
                                }}
                            />
                            {/* <TextInput
                            placeholder='Description'
                            placeholderTextColor={'#979797'}
                            style={styles.description} /> */}
                            <TabGlobalButton name="Frequency"
                                onPush={() => setFrequencyModal(!frequencyModal)}
                            />
                            <TabGlobalButton name="Start Date"
                                onPush={() => setCalendarModal(!calendarModal)} />
                            <TabGlobalButton name="End Date"
                                onPush={() => setEndModal(!endModal)} 
                                diffStyle={{ marginBottom:36}}
                                />
                            <GlobalButton diffStyle={{ backgroundColor: '#C4C0BF'}}  btnName="Mark as Missed" onSubmit={() => props.navigation.navigate('TabNavigation', { screen: 'HomeScreen' })} />
                            <GlobalButton btnName="Mark as Done" onSubmit={() => props.navigation.navigate('TabNavigation', { screen: 'HomeScreen' })} />
                        </View>
                    </ScrollView>

                </ScrollView>
            </SafeAreaView>
        </View>
    )
}