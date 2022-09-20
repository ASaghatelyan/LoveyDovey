import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Modal from 'react-native-modal'
import { styles } from './style'
import { SubmitItem } from 'app/components/submitItem'
import close from 'app/assets/img/close.png' 

export function FrequencyModal(props) {
    const [data, setData] = useState('')
    const [chooseData, setChooseData] = useState([
        {
            status: false,
            type: 'Daily', 
        },
        {
            status: false,
            type: 'Bi-Weekly', 
        },
        {
            status: false,
            type: 'Weekly', 
        },
        {
            status: false,
            type: 'Bi/Monthly', 
        },
        {
            status: false,
            type: 'Monthly', 
        },
        {
            status: false,
            type: 'Yearly', 
        },
    ])

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
                <Text style={styles.whosIn}>Choose Frequency</Text>
                <TouchableOpacity onPress={() => props.onClose(data)}>
                    <Image source={close} style={styles.closeIc} />
                </TouchableOpacity>
            </View>
            <View style={styles.bottomSide}>
                {chooseData.map((item, index) => {
                    return (<SubmitItem
                        key={index}
                        color={{ color: '#403D3D', fontSize: 16 }}
                        check={item.status}
                        valueChanged={() => {
                            setData(chooseData[index].type);
                            chooseItem(index)
                        }}
                        type={item.type}
                    />)
                })}
            </View>

        </Modal>
    )
}