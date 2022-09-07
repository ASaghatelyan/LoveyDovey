import { View, Image, Text, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { styles } from './style'
import { Calendar } from 'react-native-calendars'
import moment from 'moment/moment'
import Left from 'app/assets/img/leftC.png'
import Right from 'app/assets/img/rightC.png'


export function CalendarLovey(props) {
    const [month,setMonth]=useState('')
    return (
        <View style={{ marginTop: 52 }}>
            <View style={styles.topBtn}>
                <TouchableOpacity>
                    <Image source={Left} style={styles.arrowIc} /></TouchableOpacity>
                <Text style={styles.titleText}>dddd</Text>
                <TouchableOpacity >
                    <Image source={Right} style={styles.arrowIc} />
                </TouchableOpacity>
            </View>
            <Calendar
                // Initially visible month. Default = now
                initialDate={`${new Date()}`}
                // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                // minDate={`${new Date()}`}
                // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined

                // Handler which gets executed on day press. Default = undefined
                onDayPress={day => {
                    console.log('selected day', day);
                }}
                // Handler which gets executed on day long press. Default = undefined
                onDayLongPress={day => {
                    console.log('selected day', day);
                }}
                // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                monthFormat={'MM YYYY'}
                // Handler which gets executed when visible month changes in calendar. Default = undefined
                onMonthChange={month => {
                    console.log('month changed', month.dateString);
                }}
                // Hide month navigation arrows. Default = false
                hideArrows={true}
                // Replace default arrows with custom ones (direction can be 'left' or 'right')
                renderArrow={direction => <Arrow />}
                // Do not show days of other months in month page. Default = false
                // hideExtraDays={true}
                // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
                // day from another month that is visible in calendar page. Default = false
                // disableMonthChange={true}
                // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
                firstDay={1}
                // Hide day names. Default = false
                // hideDayNames={true}
                // <Image source={Left} />

                // Show week numbers to the left. Default = false
                // showWeekNumbers={true}
                // Handler which gets executed when press arrow icon left. It receive a callback can go back month
                onPressArrowLeft={subtractMonth => subtractMonth()}
                // Handler which gets executed when press arrow icon right. It receive a callback can go next month
                onPressArrowRight={addMonth => addMonth()}
                // Disable left arrow. Default = false
                disableArrowLeft={true}
                // Disable right arrow. Default = false
                disableArrowRight={true}
                // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
                disableAllTouchEventsForDisabledDays={true}
                // Replace default month and year title with custom one. the function receive a date as parameter
                renderHeader={date => {
                    /*Return JSX*/
                }}
                // Enable the option to swipe between months. Default = false
                enableSwipeMonths={true}
            />
        </View>
    )
}