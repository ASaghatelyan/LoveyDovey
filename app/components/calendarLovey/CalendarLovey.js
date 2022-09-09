import { View, Image, Text, TouchableOpacity } from 'react-native'
import React, { useState, useRef } from 'react'
import { styles } from './style'
import { Calendar } from 'react-native-calendars'
import moment from 'moment/moment'
import Left from 'app/assets/img/leftC.png'
import Right from 'app/assets/img/rightC.png'


export function CalendarLovey(props) {
    const [monthInfo, setMonthInfo] = useState('')
    let onNavigate = () => console.log(props.onNavi());

    return (
        <View style={styles.content}>
            <Calendar
                initialDate={`${new Date()}`}
                renderHeader={(date) => {
                    return (<Text style={styles.titleText}> {moment(date[0]).format('MMM YYYY')}</Text>)
                }} 
                onDayPress={day => { props?.onNavi && props?.onNavi(day) }} 
                onDayLongPress={day => {
                    console.log('selected day', day);
                }} 
                monthFormat={'MMM YYYY'} 
                onMonthChange={month => {
                    console.log('month changed', moment(month.dateString).format('MMM YYYY'));
                }} 
                renderArrow={direction => direction === 'left' ?
                    <Image source={Left} style={styles.arrowIc} /> :
                    <Image source={Right} style={styles.arrowIc} />
                } 
                firstDay={1}  
                onPressArrowLeft={subtractMonth => subtractMonth()}
                onPressArrowRight={addMonth => addMonth()}
                disableAllTouchEventsForDisabledDays={true} 
                enableSwipeMonths={true}
                theme={{
                    "stylesheet.calendar.header": {
                        dayHeader: {
                            textAlign: 'center',
                            fontSize: 12,
                            color: "#EB1829",
                            FontFace: { fontFamily: "Roboto-Medium", }
                        },
                    },
                }}
                style={{borderRadius:10}}
            />
        </View>
    )
}