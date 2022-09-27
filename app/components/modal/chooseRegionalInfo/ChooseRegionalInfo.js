import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import Modal from 'react-native-modal'
import { styles } from './style'
import close from 'app/assets/img/close.png'
import { SubmitRegional } from 'app/components/submitRegional'



export function ChooseRegionalInfo(props) {
    const [data, setData] = useState('')
    const [chooseData, setChooseData] = useState([])
    const [activeIndex, setActiveIndex] = useState()

    return (
        <Modal
            isVisible={props.isVisible}
            style={styles.content}
        >
            <View style={styles.titleView}>
                <Text style={styles.whosIn}>Choose {props.name}</Text>
                <TouchableOpacity onPress={() => props.onClose(data)}>
                    <Image source={close} style={styles.closeIc} />
                </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={styles.bottomSide} 
            showsVerticalScrollIndicator={false}>
                {props?.regional && props?.regional.map((item, index) => {
                    return (<SubmitRegional
                        key={index}
                        color={{ color: '#403D3D', fontSize: 16 }} 
                        onSubmit={() => { 
                            props.onChoose(item)   
                        }}
                        type={item}
                    />)
                })

                }
            </ScrollView>
        </Modal>
    )
}