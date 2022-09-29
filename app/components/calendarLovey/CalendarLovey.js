import { View, Image, Text, TouchableOpacity } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import { styles } from './style'
import { Calendar } from 'react-native-calendars'
import moment from 'moment/moment'
import Left from 'app/assets/img/leftC.png'
import Right from 'app/assets/img/rightC.png'
import { MomentRange } from 'moment-range'

export function CalendarLovey(props) {
    const [monthInfo, setMonthInfo] = useState({
        // '2022-09-22': { startingDay: true, color: 'green', textColor: '#FFF' },
        // '2022-09-24': {   color: 'green', textColor: '#FFF' }, 
        // '2022-09-28': { selected: true, endingDay: true, color: 'green', textColor: '#FFF' },
        // '2022-09-23': { selected: true, endingDay: true, color: 'green', textColor: '#FFF', marked: true, dotColor: '#50cebb' },
    })
    let onNavigate = () => console.log(props.onNavi());

    function getRange(startDate, endDate, type) {
        let fromDate = moment(startDate);
        let toDate = moment(endDate);
        let range = [];
        for (var m = moment(fromDate); m.isBefore(toDate + 1); m.add(1, 'days')) {
            range.push(m.format('YYYY-MM-DD'));
        }
        return range
    }

    

    let range = getRange('2022-09-21', '2022-09-24')
    console.log(range, 'rrrrrr');

    useEffect(() => {
        let obj = monthInfo
        range.map((date, index) => {
            if (index === 0) {
                obj[date] = { startingDay: true, color: 'green', textColor: '#FFF' }
            } else if (index === range.length - 1) {
                obj[date] = { selected: true, endingDay: true, color: 'green', textColor: '#FFF' }
            } else {
                obj[date] = { color: 'green', textColor: '#FFF' }
            }
        })
        setMonthInfo({ ...obj })
    }, [])





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
                markingType={'period'}
                markedDates={monthInfo}
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