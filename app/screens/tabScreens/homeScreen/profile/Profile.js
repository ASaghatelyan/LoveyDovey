import {
    View, Text, ScrollView,
    TouchableOpacity, StatusBar,
    ImageBackground, Image,
    SafeAreaView, SafeAreaProvider,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { styles } from './style'
import { BgImage, TabGlobalButton } from 'app/components'
import { TextInput as PaperInput } from 'react-native-paper';

import bg from 'app/assets/img/white.png'
import back from 'app/assets/img/back.png'
import user from 'app/assets/img/profile.png'
import loc from 'app/assets/img/loc.png'
import edit from 'app/assets/img/edit.png'
import { GlobalButton } from 'app/components/globalButton';



export function Profile(props) {
    const [text, setText] = useState("");
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
                            <Text style={styles.titleText}>Profile</Text>
                        </View>
                        <TouchableOpacity onPress={() => props.navigation.navigate('EditProfile')}>
                            <Image source={edit} style={styles.edit} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bottomView}>
                        <View style={styles.avatarView}>
                            <Image source={user} style={styles.userAvatar} />
                        </View>
                        <TabGlobalButton name={`Username`} />
                        <TabGlobalButton name={`Email Address`} />
                        <TabGlobalButton name={`Date of Birth `} />
                        <TabGlobalButton name={`Gender`} />
                        <TabGlobalButton name={`Country`} />
                        <TabGlobalButton name={`State`} />
                        <TabGlobalButton name={`City`} />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}