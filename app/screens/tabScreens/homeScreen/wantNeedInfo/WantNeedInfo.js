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
import edit from 'app/assets/img/edit.png'
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
                        <TouchableOpacity onPress={()=>props.navigation.navigate('WantNeedEdit',props.route.params)}>
                            <Image source={edit} style={styles.edit}/>
                        </TouchableOpacity>
                    </View>
                    <ScrollView contentContainerStyle={[styles.content, { paddingHorizontal: 16 }]}  >
                        <View>
                            <TabGlobalButton name="Select Category" 
                                data={props.route.params.category.name}
                            />
                         
                            <View style={styles.description}>
                                <Text style={styles.descriptionText}>Description</Text>
                                <Text style={styles.infoText}>{props.route.params.description}</Text>
                            </View>
                            {/* <TextInput
                            placeholder='Description'
                            placeholderTextColor={'#979797'}
                            style={styles.description} /> */}
                            <TabGlobalButton name="Frequency"
                                     data={props.route.params.frequency.name}
                            />
                            <TabGlobalButton name="Start Date"
                                     data={  moment( props.route.params.start).format('DD MMM, YYYY')} />
                            <TabGlobalButton name="End Date"
                                      data={
                                        moment( props.route.params.end).format('DD MMM, YYYY')
                                       }
                                diffStyle={{ marginBottom:36}}
                                />
                            <GlobalButton diffStyle={{ backgroundColor: '#C4C0BF'}}  btnName="Mark as Missed" onSubmit={() => {}} />
                           
                            <GlobalButton btnName="Mark as Done" onSubmit={() => {}} />
                        </View>
                    </ScrollView>

                </ScrollView>
            </SafeAreaView>
        </View>
    )
}