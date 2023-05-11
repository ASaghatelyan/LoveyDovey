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
import back from 'app/assets/img/back.png'
import { GlobalButton } from 'app/components/globalButton'
import { TextInput as PaperInput } from 'react-native-paper';
import moment from 'moment'
import axiosInstance from 'app/networking/api'


export function WantNeedEdit(props) {
    const [errorModal, setErrorModal] = useState(false)
    const [modalVisible, setMOdalVisible] = useState(false)
    const [frequencyModal, setFrequencyModal] = useState(false)
    const [calendarModal, setCalendarModal] = useState(false)
    const [endModal, setEndModal] = useState(false)
    const [category, setCategory] = useState(props.route.params?.category)
    const [startData, setStartDate] = useState(props.route.params?.start)
    const [endData, setEndDate] = useState(props.route.params?.end)
    const [frequency, setFrequency] = useState(props.route.params?.frequency)
    const [text, setText] = useState(props.route.params.description);
    const [data, setData] = useState(props.route.params)

    let onUpdate = async () => {
        try {
            if (startData && endData && frequency && text && category) {
                await axiosInstance.post(`/user/need-or-want/update`, data)
                props.navigation.goBack()
            }
            else { alert('Please fill in all fields') }
        } catch (e) {
            console.log(e, 'err');
        }
    }

    let onDelete = async () => {
        try {
            await axiosInstance.post(`/user/need-or-want/delete`, { id: props.route.params.id })
            props.navigation.pop(2)

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
                    barStyle='dark-content'
                    translucent={true} />
                <ScrollView contentContainerStyle={styles.content}  >
                    <View>
                        <View style={styles.topTitle}>
                            <TouchableOpacity style={{ padding:4}} onPress={() => props.navigation.goBack()}>
                                <Image source={back} style={styles.back} />
                            </TouchableOpacity>
                            <View style={styles.gFlex}>
                                <Text style={styles.titleText}>Want/Need</Text>
                            </View>

                        </View>
                        <TabGlobalButton name="Select Category"
                            data={category.name}
                            onPush={() => setMOdalVisible(!modalVisible)}
                        />
                        <PaperInput
                            label="Description"
                            value={text}
                            onChangeText={text => {
                                data.description = text
                                setText(text)
                            }}
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
                        <GlobalButton
                            diffStyle={{ backgroundColor: '#F5F5F5', borderWidth: 1, borderColor: '#EB1829' }}
                            textStyle={{ color: '#EB1829' }} btnName="Delete"
                            onSubmit={onDelete} />
                        <GlobalButton btnName="Save" onSubmit={onUpdate} />
                    </View>
                </ScrollView>
                <SelectCategori
                    isVisible={modalVisible}
                    onClose={(info) => {
                        setCategory(info)
                        data.category_id = info.id
                        setMOdalVisible(!modalVisible)
                    }} />
                <FrequencyModal
                    isVisible={frequencyModal}
                    onClose={(info) => {
                        setFrequency(info)
                        data.frequency_id = info.id
                        setFrequencyModal(!frequencyModal)
                    }} />
                <CalendarModal
                    isVisible={calendarModal}
                    onNavi={(day) => {
                        setCalendarModal(!calendarModal)
                        setStartDate(moment(day.dateString).format('DD MMM, YYYY'))
                        data.start = moment(day.dateString).format('DD MMM, YYYY')
                    }}
                    onClose={(info) => {
                        setCalendarModal(!calendarModal)
                    }} />
                <CalendarModal
                    isVisible={endModal}
                    onNavi={(day) => {
                        setEndModal(!endModal)
                        setEndDate(moment(day.dateString).format('DD MMM, YYYY'))
                        data.end = moment(day.dateString).format('DD MMM, YYYY')
                    }}
                    onClose={(info) => {
                        setEndModal(!endModal)
                    }} />
                <ErrorModal
                    isVisible={errorModal}
                    onClose={() => {
                        setErrorModal(!errorModal)
                    }} />
            </SafeAreaView>
        </View>
    )
}