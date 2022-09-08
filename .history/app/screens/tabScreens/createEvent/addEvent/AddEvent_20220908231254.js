import {
    View, Text, ScrollView,
    TouchableOpacity, StatusBar,
    ImageBackground, Image,
    SafeAreaView, SafeAreaProvider, TextInput,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { styles } from './style'
import { BgImage, CalendarLovey, SelectCategori, TabGlobalButton } from 'app/components'
import bg from 'app/assets/img/white.png'
import { GlobalButton } from 'app/components/globalButton'

export function AddEvent(props) {
    console.log(props.route.params.day);
    const [modalVisible, setMOdalVisible] = useState(false)
    const [category,setCategory]=useState()
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
                            onPush={() => setMOdalVisible(!modalVisible)}
                        />
                        <TextInput
                            placeholder='Description'
                            placeholderTextColor={'#979797'}
                            style={styles.description} />
                        <TabGlobalButton name="Frequency" item={''} />
                        <TabGlobalButton name="Start Date" />
                        <TabGlobalButton name="End Date" />
                        <GlobalButton btnName="Submit" />
                    </View>
                </ScrollView>
                <SelectCategori
                    isVisible={modalVisible}
                    onClose={() => {
                        setMOdalVisible(!modalVisible)}}
                />
            </SafeAreaView>
        </View>
    )
}