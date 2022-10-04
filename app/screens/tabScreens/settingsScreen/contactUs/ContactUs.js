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
import axiosInstance from 'app/networking/api';



export function ContactUs(props) {
    const [text, setText] = useState("");
 
    const onSend = async () => {
        try {
            let res = await axiosInstance.post(`user/message`, {text})
       setText('')
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
                            <Text style={styles.titleText}>Contact Us</Text>
                        </View>
                    </View>
                    <View style={styles.bottomView}>
                        <View style={styles.infoView}>
                            <Image style={styles.infoIc} source={phone} />
                            <Text style={styles.infoText}>
                                206-235-5729
                            </Text>
                        </View>
                        <View style={styles.infoView}>
                            <Image style={styles.infoIc} source={loc} />
                            <Text style={styles.infoText}>
                                14206 N. Lava Falls Trl Marana, AZ 85658
                            </Text>
                        </View>
                        <View style={styles.infoView}>
                            <Image style={styles.infoIc} source={mess} />
                            <Text style={styles.infoText}>Contact@loveydovey.app</Text>
                        </View>
                        <Text style={styles.mess}>Message</Text>
                        <PaperInput
                            label="Type your message here"
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
                    </View>
                    <View style={styles.btnView}>
                        <GlobalButton btnName='Send' onSubmit={onSend} />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}