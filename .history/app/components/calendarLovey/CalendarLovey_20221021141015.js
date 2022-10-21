import { View, Image, Text, TouchableOpacity } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import { styles } from './style'
import { Calendar } from 'react-native-calendars'
import moment from 'moment/moment'
import Left from 'app/assets/img/leftC.png'
import Right from 'app/assets/img/rightC.png'
import { MomentRange } from 'moment-range'

export function CalendarLovey(props) {
  
    let onNavigate = () => console.log(props.onNavi());
 
    return (
        <View style={styles.content}>
            <Calendar
                initialDate={`${new Date()}`}
                renderHeader={(date) => {
                    return (<Text style={styles.titleText}> {moment(date[0]).format('MMM YYYY')}</Text>)
                }}
                minDate={`${(moment(new Date()).format('DD MMM YYYY'))}`}
                onDayPress={day => { props?.onNavi && props?.onNavi(day) }}
                monthFormat={'MMM YYYY'}
                renderArrow={direction => direction === 'left' ?
                // onDayLongPress={day => {
                //     console.log('selected day', day);
                // }}
                // onMonthChange={month => {
                //     console.log('month changed', moment(month.dateString).format('MMM YYYY'));
                // }}
                <Image source={Left} style={styles.arrowIc} /> :
                <Image source={Right} style={styles.arrowIc} />
            }
                firstDay={1}
                onPressArrowLeft={subtractMonth => subtractMonth()}
                onPressArrowRight={addMonth => addMonth()}
                disableAllTouchEventsForDisabledDays={true}
                enableSwipeMonths={true}
                markingType={'period'}
                markedDates={props.monthInfo}
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
                style={{ borderRadius: 10 }}
            />
        </View>
    )
}