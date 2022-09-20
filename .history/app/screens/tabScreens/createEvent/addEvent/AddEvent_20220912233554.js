import {
    View, Text, ScrollView,
    TouchableOpacity, StatusBar,
    ImageBackground, Image,
    SafeAreaView, SafeAreaProvider, TextInput,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { styles } from './style'
import { BgImage, CalendarLovey, CalendarModal, ErrorModal, FrequencyModal, SelectCategori, TabGlobalButton } from 'app/components'
import bg from 'app/assets/img/white.png'
import { GlobalButton } from 'app/components/globalButton'
import { TextInput as PaperInput } from 'react-native-paper';
import moment from 'moment'


export function AddEvent(props) {
    console.log(props.route.params.day);
    const [errorModal,setErrorModal]=useState(true)
    const [modalVisible, setMOdalVisible] = useState(false)
    const [frequencyModal, setFrequencyModal] = useState(false)
    const [calendarModal, setCalendarModal] = useState(false)
    const [endModal, setEndModal] = useState(false)
    const [category, setCategory] = useState('')
    const [startData, setStartDate] = useState('')
    const [endData, setEndDate] = useState('')
    const [frequency, setFrequency] = useState('')
    const [text, setText] = useState("");

    return (
        <View style={{ flex: 1, height: '100%' }}>
            <BgImage img={bg} />
            <SafeAreaView
                style={styles.mainContainer}>
                <StatusBar
                    animated={true}
                    // backgroundColor="transparent"
                    barStyle='dark-content'
                    translucent={true} />
                <ScrollView contentContainerStyle={styles.content}  >
                    <View>
                        <Text style={styles.titleText}>Create Need /Want</Text>
                        <TabGlobalButton name="Select Category"
                            data={category}
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
                            data={frequency}
                            onPush={() => setFrequencyModal(!frequencyModal)}
                        />
                        <TabGlobalButton name="Start Date"
                            data={startData}
                            onPush={() => setCalendarModal(!calendarModal)} />
                        <TabGlobalButton name="End Date"
                            data={endData}
                            onPush={() => setEndModal(!endModal)} />
                        <GlobalButton btnName="Submit" onSubmit={()=>props.navigation.navigate('TabNavigation',{screen:'HomeScreen'})}/>
                    </View>
                </ScrollView>
                <SelectCategori
                    isVisible={modalVisible}
                    onClose={(info) => {
                        setCategory(info)
                        setMOdalVisible(!modalVisible)
                    }}
                />
                <FrequencyModal
                    isVisible={frequencyModal}
                    onClose={(info) => {
                        setFrequency(info)
                        setFrequencyModal(!frequencyModal)
                    }}
                />
                <CalendarModal
                    isVisible={calendarModal}
                    onNavi={(day) => {
                        setCalendarModal(!calendarModal)
                        setStartDate(moment(day.dateString).format('DD MMM, YYYY'))
                    }}
                    onClose={(info) => {
                        setCalendarModal(!calendarModal)
                    }}
                />
                <CalendarModal
                    isVisible={endModal}
                    onNavi={(day) => {
                        setEndModal(!endModal)
                        setEndDate(moment(day.dateString).format('DD MMM, YYYY'))
                    }}
                    onClose={(info) => {
                        setEndModal(!endModal)
                    }}
                />
                <ErrorModal 
                isVisible={errorModal}
                onClose={() => {
                    setErrorModal(!errorModal)
                }}
                />
            </SafeAreaView>
        </View>
    )
}