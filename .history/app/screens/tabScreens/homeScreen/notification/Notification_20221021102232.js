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
import axiosInstance from 'app/networking/api';
import moment from 'moment';
import del from 'app/assets/img/close.png'

export function Notification(props) {
    const [data, setData] = useState([])
    useEffect(() => {
        let requestFunc = async () => {
            try {
                let res = await axiosInstance.get(`/user/notification`)
                setData(res.data.data)
            } catch (e) {
                console.log(e, 'err');
            }
        }
        requestFunc()
    }, [])

    let delNotification = async () => {
        try {
            let res = await axiosInstance.get(`/user/notification/delete?id=${}`)
            setData(res.data.data)
        } catch (e) {
            console.log(e, 'err');
        }
    }

    let delAllNotification = async () => {
        try {
            let res = await axiosInstance.get(`/user/notification`)
            setData(res.data.data)
        } catch (e) {
            console.log(e, 'err');
        }
    }

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
                    contentContainerStyle={[styles.bottomView, data.length < 1 ? { justifyContent: 'center', alignItems: 'center' } : { backgroundColor: 'white' }]}>
                    {data.length < 1 ? <View style={styles.noDataView}>
                        <Image source={noData} style={styles.noData} />
                        <Text style={styles.noDataText}>No data found</Text>
                    </View> :
                        <View>
                            {data.map((item, index) => {
                                return <View key={item.id}>
                                    <View style={styles.titleView}>
                                        <Text style={styles.title}>{moment(item.need_or_want.start).format('DD MMM, YYYY')} - {moment(item.need_or_want.end).format('DD MMM, YYYY')}</Text>
                                        <TouchableOpacity onPress={() => {

                                        }}>
                                            <Image source={del} style={styles.delIc} />
                                        </TouchableOpacity>
                                    </View>
                                    <Text style={styles.description}>{item.need_or_want.description}</Text>
                                </View>
                            })}
                        </View>}
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}