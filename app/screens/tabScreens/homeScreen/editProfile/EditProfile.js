import {
    View, Text, ScrollView,
    TouchableOpacity, StatusBar,
    ImageBackground, Image,
    SafeAreaView, SafeAreaProvider,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { styles } from './style'
import { BgImage, EditProfileItem } from 'app/components'
import { TextInput as PaperInput } from 'react-native-paper';
import { ChooseImage } from 'app/components/imagePicker'
import bg from 'app/assets/img/white.png'
import back from 'app/assets/img/back.png'
import phone from 'app/assets/img/ph.png'
import editPhoto from 'app/assets/img/editPhoto.png'
import user from 'app/assets/img/profile.png'
import { GlobalButton } from 'app/components/globalButton';


export function EditProfile(props) {
    const [text, setText] = useState("");
    const [img, setImages] = useState(null)
    console.log(img);
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
                            <Text style={styles.titleText}>Edit Profile</Text>
                        </View>
                    </View>
                    <View style={styles.bottomView}>
                        <View style={styles.avatarView}>
                            <TouchableOpacity style={{ position: 'relative' }} onPress={() => {
                        ChooseImage(async (imageRes) => {
                            setImages([imageRes.assets[0].uri])
                        })
                    }}>
                                <Image source={img ? img : user} style={styles.userAvatar} />
                                <View>
                                    <Image source={editPhoto} style={styles.editPhoto} />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <PaperInput
                            label="Username"
                            value={text}
                            onChangeText={text => setText(text)}
                            style={styles.description}
                            theme={{
                                colors: {
                                    placeholder: '#FFF', text: '#FFF', primary: '#EB1829',
                                },
                                fonts: { regular: 'Roboto-Regular' }
                            }} />
                        <EditProfileItem name='Date of Birth' />
                        <EditProfileItem name='Gender' />
                        <EditProfileItem name='Country' />
                        <EditProfileItem name='State' />
                        <EditProfileItem name='City' />
                        <EditProfileItem name='Ethnicity' />
                        <EditProfileItem name='Eduaction' />
                        <EditProfileItem name='Income Level' />
                        <EditProfileItem name='Email Address' />
                    </View>
                </ScrollView>
                    <View style={styles.btnView}>
                        <GlobalButton btnName='Update' onPush={() => { }} />
                    </View>
            </SafeAreaView>
        </View>
    )
}