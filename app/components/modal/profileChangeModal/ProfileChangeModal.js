import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import Modal from 'react-native-modal'
import { styles } from './style'
import { SubmitItem } from 'app/components/submitItem'
import close from 'app/assets/img/close.png'
import axiosInstance from 'app/networking/api'

export function ProfileChangeModal(props) {
    const [data, setData] = useState('')
    const [chooseData, setChooseData] = useState([ ])

    const chooseItem = (ind) => {
        let arr = chooseData
        // arr[ind].status = !arr[ind].status
        arr.filter((item, index) => {
            if (ind === index) {
                arr[ind].status = !arr[ind].status
            }
            else (arr[index].status = false)
        })
        setChooseData([...arr])
    }




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
            <View style={styles.bottomSide}>
                {props.data && props?.data.map((item, index) => {
                    return (<SubmitItem
                        key={index}
                        color={{ color: '#403D3D', fontSize: 16 }}
                        check={item.status}
                        valueChanged={() => {
                            setData(chooseData[index].name);
                            chooseItem(index)
                        }}
                        type={item.name}
                    />)
                })}
            </View>
        </Modal>
    )
}