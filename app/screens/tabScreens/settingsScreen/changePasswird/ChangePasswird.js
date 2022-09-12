import {
    View, Text, ScrollView,
    TouchableOpacity, StatusBar,
    ImageBackground, Image,
    SafeAreaView, SafeAreaProvider,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { styles } from './style'
import { BgImage } from 'app/components'
import { TextInput as PaperInput } from 'react-native-paper';

import bg from 'app/assets/img/white.png'
import back from 'app/assets/img/back.png'
import phone from 'app/assets/img/ph.png'
import loc from 'app/assets/img/loc.png'
import mess from 'app/assets/img/mess.png'
import { GlobalButton } from 'app/components/globalButton';

export function ChangePasswird(props) {
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
                            <Text style={styles.titleText}>Change Password</Text>
                        </View>
                    </View>
                    <View style={styles.inputView}>
                        <PaperInput
                            label="Current Password"
                            value={text}
                            onChangeText={text => setText(text)}
                            style={styles.description}
                            theme={{
                                colors: {
                                    placeholder: '#FFF', text: '#FFF', primary: '#EB1829',
                                },
                                fonts: { regular: 'Roboto-Regular' }
                            }}
                        />
                        <PaperInput
                            label="New Password"
                            value={text}
                            onChangeText={text => setText(text)}
                            style={styles.description}
                            theme={{
                                colors: {
                                    placeholder: '#FFF', text: '#FFF', primary: '`#EB1829`',
                                },
                                fonts: { regular: 'Roboto-Regular' }
                            }}
                        />
                        <PaperInput
                            label="Confirm New Password"
                            value={text}
                            onChangeText={text => setText(text)}
                            style={styles.description}
                            theme={{
                                colors: {
                                    placeholder: '#FFF', text: '#FFF', primary: '#EB1829',
                                },
                                fonts: { regular: 'Roboto-Regular' }
                            }}
                        />
                    </View>
                    <View style={styles.btnView}>
                        <GlobalButton btnName='Update' onPush={() => { }} />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}