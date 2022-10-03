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
import axiosInstance from 'app/networking/api'
import moment from 'moment'

export function CreateEvent(props) {
    const [data, setData] = useState([])
    const [monthInfo, setMonthInfo] = useState({})
    function getRange(startDate, endDate, type) {
        let fromDate = moment(startDate);
        let toDate = moment(endDate);
        let range = [];
        for (var m = moment(fromDate); m.isBefore(toDate + 1); m.add(1, 'days')) {
            range.push(m.format('YYYY-MM-DD'));
        }
        return range
    }

    const addTime = (data) => {
        let arr = []
        data.map((item, index) => {
            return item.map((item, index) => {
                arr.push(getRange(item.start, item.end))
            })
        })

        return arr
    }

    useEffect(() => {
        let requestFunc = async () => {
            try {
                let res = await axiosInstance.get(`user/need-or-want`)
                setData(res.data.data);
                let obj = monthInfo
                addTime(Object.values(res.data.data)).map((item, ind) => {
                    item.map((date, index) => {
                        console.log(item[0] ===item[ item.length - 1],'ss');
                          if (item[0] === item[ item.length - 1]) {
                            obj[date] = {disabled: true, startingDay: true , endingDay: true, color: '#EB1829', textColor: '#403D3D' }
                        } 
                        else if (index === 0) {
                            obj[date] = { startingDay: true, color: '#EB1829', textColor: '#403D3D' }
                        } else if (index === item.length - 1) {
                            obj[date] = { selected: true, endingDay: true, color: '#EB1829', textColor: '#403D3D' }
                        }  else { 
                            obj[date] = { color: '#EB1829', textColor: '#403D3D' }
                        }
                    })
                })
                setMonthInfo({ ...obj })
            } catch (e) {
                console.log(e, 'err');
            }
        }
        requestFunc()
    }, [])

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
                        <CalendarLovey
                            onNavi={(day) => props.navigation.navigate('AddEvent', { day })}
                            monthInfo={monthInfo}
                        />
                        <Text style={styles.text}>Hint: <Text style={styles.textIn}>Click the plus sign to start a Want/Need.</Text></Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}