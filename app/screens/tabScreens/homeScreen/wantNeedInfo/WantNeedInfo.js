import {
    View, Text, ScrollView,
    TouchableOpacity, StatusBar,
    Image, SafeAreaView,
} from 'react-native'
import React, { useState } from 'react'
import { styles } from './style'
import { BgImage, TabGlobalButton } from 'app/components'
import bg from 'app/assets/img/white.png'
import back from 'app/assets/img/back.png'
import edit from 'app/assets/img/edit.png'
import { GlobalButton } from 'app/components/globalButton';
import moment from 'moment'
import axiosInstance from 'app/networking/api'


export function WantNeedInfo(props) {
    let onMissed = async () => {
        try {
            await axiosInstance.post(`/user/need-or-want/status/update`, {
                id: props.route.params.id,
                status: 'Missed'
            })
            props.navigation.replace('WantNeedList')
        } catch (e) {
            console.log(e, 'err');
        }
    }

    let onDone = async () => {
        try {
            await axiosInstance.post(`/user/need-or-want/delete`, {
                id: props.route.params.id,
                status: 'Done'
            })
            props.navigation.replace('WantNeedList')

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
                    translucent={true}
                />
                <ScrollView contentContainerStyle={styles.content}  >
                    <View style={styles.topTitle}>
                        <TouchableOpacity onPress={() => props.navigation.goBack()}>
                            <Image source={back} style={styles.back} />
                        </TouchableOpacity>
                        <View style={styles.gFlex}>
                            <Text style={styles.titleText}>Want/Need</Text>
                        </View>
                        <TouchableOpacity onPress={() => props.navigation.replace('WantNeedEdit', props.route.params)}>
                            <Image source={edit} style={styles.edit} />
                        </TouchableOpacity>
                    </View>
                    <ScrollView contentContainerStyle={[styles.content, { paddingHorizontal: 16 }]}  >
                        <View>
                            <TabGlobalButton name="Select Category"
                                data={props.route.params.category.name}
                            />

                            <View style={styles.description}>
                                <Text style={styles.descriptionText}>Description</Text>
                                <Text style={styles.infoText}>{props.route.params.description}</Text>
                            </View>
                            {/* <TextInput
                            placeholder='Description'
                            placeholderTextColor={'#979797'}
                            style={styles.description} /> */}
                            <TabGlobalButton name="Frequency"
                                data={props.route.params.frequency.name}
                            />
                            <TabGlobalButton name="Start Date"
                                data={moment(props.route.params.start).format('DD MMM, YYYY')} />
                            <TabGlobalButton name="End Date"
                                data={
                                    moment(props.route.params.end).format('DD MMM, YYYY')
                                }
                                diffStyle={{ marginBottom: 36 }}
                            />
                            <GlobalButton diffStyle={{ backgroundColor: '#C4C0BF' }} btnName="Mark as Missed" onSubmit={onMissed} />
                            <GlobalButton btnName="Mark as Done" onSubmit={onDone} />
                        </View>
                    </ScrollView>

                </ScrollView>
            </SafeAreaView>
        </View>
    )
}