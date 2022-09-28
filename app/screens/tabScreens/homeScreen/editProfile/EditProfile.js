import {
    View, Text, ScrollView,
    TouchableOpacity, StatusBar,
    ImageBackground, Image,
    SafeAreaView, SafeAreaProvider,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { styles } from './style'
import { BgImage, CalendarModal, ChooseRegionalInfo, EditProfileItem, LoadingModal, ProfileChangeModal } from 'app/components'
import { TextInput as PaperInput } from 'react-native-paper';
import { ChooseImage } from 'app/components/imagePicker'
import bg from 'app/assets/img/white.png'
import back from 'app/assets/img/back.png'
import phone from 'app/assets/img/ph.png'
import editPhoto from 'app/assets/img/editPhoto.png'
import user from 'app/assets/img/profile.png'
import { GlobalButton } from 'app/components/globalButton';
import axiosInstance from 'app/networking/api';
import { set } from 'react-native-reanimated';

export function EditProfile(props) {
    const [load, setLoad] = useState(false)
    const [globalData, setGlobalData] = useState({ ...props.route.params.globalData })
    const [changedData, setChangedData] = useState({})
    const [text, setText] = useState(props.route.params?.data?.name);
    const [img, setImages] = useState(null)
    const [modatlVisible, setModalVisible] = useState(false)
    const [bthDay, setBthDay] = useState('Date of Birth')
    const [genderModal, setGenderModal] = useState(false)
    const [gender, setGender] = useState({ id: 1, name: "Gender" })
    const [countryModal, setCountryModal] = useState(false)
    const [country, setCountry] = useState('Country')
    const [stateModal, setStateModal] = useState(false)
    const [state, setState] = useState('State')
    const [cityModal, setCityModal] = useState(false)
    const [city, setCity] = useState('City')
    const [ethnicityModal, setEthnicityModal] = useState(false)
    const [ethnicity, setEthnicity] = useState({ id: 1, name: 'Ethnicity' })
    const [incomLvlModal, setIncomeLvlModal] = useState(false)
    const [incomLvl, setIncomeLvl] = useState({ id: 1, name: 'Income Level' })
    const [educationModal, setEducationModal] = useState(false)
    const [education, setEducation] = useState({ id: 1, name: 'Education' })


    // useEffect(() => {
    //     setLoad(true)
    //     let requestFunc = async () => {
    //         try {
    //             let resCountry = await axiosInstance.get("/country")
    //             let resGender = await axiosInstance.get("/gender")
    //             let resEducation = await axiosInstance.get(`/education`)
    //             let resIncomingLvl = await axiosInstance.get(`/income-level`)
    //             console.log();
    //             setGlobalData({
    //                 resCountry: resCountry.data.data,
    //                 resGender: resGender.data.data,
    //                 resEducation: resEducation.data.data,
    //                 resIncomingLvl: resIncomingLvl.data.data,
    //             })
    //             setLoad(false)
    //         } catch (e) {
    //             console.log(e, 'err');
    //         }
    //     }
    //     requestFunc()
    // }, [])


    useEffect(() => {
        let requestFunc = async () => {
            try {
                let resState = await axiosInstance.get(`/state/?country=${country}`)
                setGlobalData({
                    ...globalData,
                    resState: resState.data.data,
                })
            } catch (e) {
                console.log(e, 'err');
            }
        }
        requestFunc()
    }, [country])

    useEffect(() => {
        let requestFunc = async () => {
            try {

                let resCity = await axiosInstance.get(`/cities/?state=${state}`)

                setGlobalData({
                    ...globalData,
                    resCity: resCity.data.data,
                })
            } catch (e) {
                console.log(e, 'err');
            }
        }
        requestFunc()
    }, [state])

    useEffect(() => {
        let requestFunc = async () => {
            try {
                let resEthnicity = await axiosInstance.get(`/ethnicity/?cities=${city}`)
                setGlobalData({
                    ...globalData,
                    resEthnicity: resEthnicity.data.data
                })
            } catch (e) {
                console.log(e, 'err');
            }
        }
        requestFunc()
    }, [city])

    let formData = new FormData();
    formData.append("country", country);
    formData.append("state", state);
    formData.append("city", city);
    formData.append("date_of_birth", bthDay);
    formData.append("education_id", education.id);
    formData.append("gender_id", gender.id);
    formData.append("ethnicity_id", ethnicity.id);
    formData.append("income_level_id", incomLvl.id);
    formData.append(`image`, {
        name: `image.jpg`,
        uri: `${img}`,
        type: 'image/jpeg',
    })

    const onUpdate = async () => {
        try {
            await axiosInstance.post(`user/detail/create`, formData)
            props.navigation.navigate('Profile')
        } catch (e) {
            console.log(e, 'err');
        }
    }

    return (
        <View style={{ flex: 1, height: '100%' }} >
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
                        <EditProfileItem name={bthDay} chooseStyle={bthDay !== 'Date of Birth' && { color: '#403D3D' }} onSelect={() => setModalVisible(!modatlVisible)} />
                        <EditProfileItem name={gender.name} chooseStyle={gender.name !== 'Gender' && { color: '#403D3D' }} onSelect={() => setGenderModal(!genderModal)} />
                        <EditProfileItem name={country} chooseStyle={country !== 'Country' && { color: '#403D3D' }} onSelect={() => setCountryModal(!countryModal)} />
                        <EditProfileItem name={state} chooseStyle={state !== 'State' && { color: '#403D3D' }} onSelect={() => country !== 'Country' && setStateModal(!stateModal)} />
                        <EditProfileItem name={city} chooseStyle={city !== 'City' && { color: '#403D3D' }} onSelect={() => state !== 'State' && setCityModal(!cityModal)} />
                        <EditProfileItem name={ethnicity.name} chooseStyle={ethnicity.name !== 'Ethnicity' && { color: '#403D3D' }} onSelect={() => setEthnicityModal(!ethnicityModal)} />
                        <EditProfileItem name={education.name} chooseStyle={education.name !== 'Education' && { color: '#403D3D' }} onSelect={() => setEducationModal(!educationModal)} />
                        <EditProfileItem name={incomLvl.name} chooseStyle={incomLvl.name !== 'Income Level' && { color: '#403D3D' }} onSelect={() => setIncomeLvlModal(!incomLvlModal)} />
                        <EditProfileItem name={props.route.params?.data.email} chooseStyle={props.route.params?.data.email && { color: '#403D3D' }} />
                    </View>
                </ScrollView>
                <View style={styles.btnView}>
                    <GlobalButton btnName='Update' onSubmit={onUpdate} />
                </View>
            </SafeAreaView>
            <LoadingModal isVisible={load} />
            <ProfileChangeModal
                isVisible={genderModal}
                onClose={async (a) => {
                    setGenderModal(!genderModal)
                }}
                onChoose={async (a) => {
                    setGenderModal(!genderModal)
                    setGender(a)
                }}
                name='Gender'
                data={globalData?.resGender}
            />
            <ProfileChangeModal
                isVisible={educationModal}
                onClose={() => {
                    setEducationModal(!educationModal)

                }}
                onChoose={(a) => {
                    setEducationModal(!educationModal)
                    setEducation(a)
                }}
                name='Education'
                data={globalData.resEducation}
            />
            <ProfileChangeModal
                isVisible={incomLvlModal}
                onClose={() => {
                    setIncomeLvlModal(!incomLvlModal)

                }}
                onChoose={(a) => {
                    setIncomeLvlModal(!incomLvlModal)
                    setIncomeLvl(a)
                }}
                name='Income Level'
                data={globalData.resIncomingLvl}
            />
            <ProfileChangeModal
                isVisible={ethnicityModal}
                onClose={() => {
                    setEthnicityModal(!ethnicityModal)

                }}
                onChoose={(a) => {
                    setEthnicityModal(!ethnicityModal)
                    setEthnicity(a)
                }}
                name='Ethniccity'
                data={globalData.resEthnicity}
            />
            <ChooseRegionalInfo
                isVisible={countryModal}
                onClose={async () => {
                    setCountryModal(!countryModal)
                }}
                onChoose={(a) => {
                    setCountryModal(!countryModal)
                    setCountry(a)
                }}
                name='Country'
                regional={globalData.resCountry}
            />
            <ChooseRegionalInfo
                isVisible={stateModal}
                onClose={() => {
                    setStateModal(!stateModal)
                }}
                onChoose={(a) => {
                    setStateModal(!stateModal)
                    setState(a)
                }}
                name='State'
                regional={globalData.resState}
            />
            <ChooseRegionalInfo
                isVisible={stateModal}
                onClose={() => {
                    setStateModal(!stateModal)
                }}
                onChoose={(a) => {
                    setStateModal(!stateModal)
                    setState(a)
                }}
                name='State'
                regional={globalData.resState}
            />
            <ChooseRegionalInfo
                isVisible={cityModal}
                onClose={() => {
                    setCityModal(!cityModal)
                }}
                onChoose={(a) => {
                    setCityModal(!cityModal)
                    setCity(a)
                }}
                name='City'
                regional={globalData.resCity}
            />
            <CalendarModal
                isVisible={modatlVisible}
                onClose={() => { setModalVisible(!modatlVisible) }}
                onNavi={(a) => {
                    setBthDay(a.dateString)
                    setModalVisible(!modatlVisible)
                }}
            />
        </View >
    )
}