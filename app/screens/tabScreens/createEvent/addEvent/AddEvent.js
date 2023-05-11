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
import axiosInstance from 'app/networking/api'
import back from 'app/assets/img/back.png'

export function AddEvent(props) {

    const [errorModal, setErrorModal] = useState(false)
    const [modalVisible, setMOdalVisible] = useState(false)
    const [frequencyModal, setFrequencyModal] = useState(false)
    const [calendarModal, setCalendarModal] = useState(false)
    const [endModal, setEndModal] = useState(false)
    const [category, setCategory] = useState([])
    const [startData, setStartDate] = useState()
    const [endData, setEndDate] = useState()
    const [frequency, setFrequency] = useState([])
    const [text, setText] = useState();


    const formData = new FormData()
    formData.append('category_id', category.id,)
    formData.append('frequency_id', frequency.id,)
    formData.append('description', text)
    formData.append('start', startData,)
    formData.append('end', endData,)

    let onCreate = async () => {
        try {
            if (startData && endData && frequency && text && category) {
                await axiosInstance.post(`user/need-or-want/create`, formData)
                props.navigation.replace('TabNavigation', { screen: 'CreateEventNavigation' })
            }
            else { alert('Please fill in all fields') }
        } catch (e) {
            console.log(e, 'err');
        }
    }


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
                <View style={styles.topTitle}>
                    <TouchableOpacity style={{ padding: 4 }} onPress={() => props.navigation.goBack()}>
                        <Image source={back} style={styles.back} />
                    </TouchableOpacity>
                    <View style={styles.gFlex}>
                        <Text style={styles.titleText}>Edit Profile</Text>
                    </View>
                </View>
                <ScrollView contentContainerStyle={styles.content}  >
                    <View>
                        {/* <Text style={styles.titleText}>Create Want/Need</Text> */}
                        <TabGlobalButton name="Select Category"
                            data={category.name}
                            onPush={() => setMOdalVisible(!modalVisible)}
                        />
                        <PaperInput
                            label="Description"
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
                        <TabGlobalButton name="Frequency"
                            data={frequency.name}
                            onPush={() => setFrequencyModal(!frequencyModal)}
                        />
                        <TabGlobalButton name="Start Date"
                            data={startData}
                            onPush={() => setCalendarModal(!calendarModal)} />
                        <TabGlobalButton name="End Date"
                            data={endData}
                            onPush={() => setEndModal(!endModal)}
                            diffStyle={{ marginBottom: 36 }} />
                        <GlobalButton btnName="Submit" onSubmit={onCreate} />
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