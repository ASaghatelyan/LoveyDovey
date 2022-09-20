import { View, Image, Text, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { styles } from './style'
import { Calendar } from 'react-native-calendars'
import moment from 'moment/moment'
import Left from 'app/assets/img/leftC.png'
import Right from 'app/assets/img/rightC.png'


export function CalendarLovey(props) {
    const [monthInfo,setMonthInfo]=useState('')
    const [dayInfo, setDayInfo] = useState()
    const [modalVisible, setModalVisible] = useState(false);
    const [input, setInput] = useState()
    console.log(monthInfo);
    return (
        <View style={styles.content}>
            <View style={styles.topBtn}>
                <TouchableOpacity>
                    <Image source={Left} style={styles.arrowIc} /></TouchableOpacity>
                <Text style={styles.titleText}>{monthInfo}</Text>
               
                <TouchableOpacity >
                    <Image source={Right} style={styles.arrowIc} />
                </TouchableOpacity>
            </View>
            <Calendar
                       hideArrows={true}
                       disableMonthChange={true}
                       enableSwipeMonths={true}
                        minDate={`${(moment(new Date()).format('DD MMM YYYY'))}`}
                        renderHeader={(date) => { 
                            console.log(data.'ddd');
                            setMonthInfo(<Text style={{ color: "#000" }}> {moment(date[0]).format('DD MMM YYYY')}</Text>)
                        }}
                        maxDate={`${moment(new Date()).format('DD MMM YYYY')}`}
                        renderHeader={(date) => { 
                            return (<Text style={{ color: "#000" }}> {moment(date[0]).format('DD MMM YYYY')}</Text>)
                        }}
                        onPressArrowLeft={(goBack) => {
                            goBack()
                        }} 
                        enableSwipeMonths
                        onPressArrowRight={(goFuture) => {
                            goFuture()
                        }}
                        onDayPress={(e) => {
                            setInput(moment(e.dateString).format('DD MMM YYYY'))
                            setDayInfo(moment(e.dateString).format('DD MMM YYYY'))
                            setModalVisible(!modalVisible) 
                        }}
                        firstDay={1}
                        style={{ height: "100%",marginTop: Platform.OS === 'ios' ? 35 : 1 }}
                    />
        </View>
    )
}