import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Modal from 'react-native-modal'
import { styles } from './style'
import { SubmitItem } from 'app/components/submitItem'
import close from 'app/assets/img/close.png'
import { color } from 'react-native-reanimated'
import gift from 'app/assets/img/gif.png'
import mes from 'app/assets/img/mes.png'
import time from 'app/assets/img/time.png'
import like from 'app/assets/img/like.png'
import love from 'app/assets/img/love.png'
import he from 'app/assets/img/he.png'
import mers from 'app/assets/img/mers.png'
import { GlobalButton } from 'app/components/globalButton'

export function SelectCategori(props) {
    const [data, setData] = useState('')
    const [chooseData, setChooseData] = useState([
        {
            id: 1,
            status: false,
            name: 'Presents',
            img: gift
        },
        {
            id: 2,
            status: false,
            name: 'Positive Words',
            img: mes
        },
        {
            id: 3,
            status: false,
            name: 'Precious Time',
            img: time
        },
        {
            id: 4,
            status: false,
            name: 'Positive Acts',
            img: like
        },
        {
            id: 5,
            status: false,
            name: 'Physical Touch',
            img: love
        },
        {
            id: 6,
            status: false,
            name: 'Passion',
            img: he
        },
        {
            id: 7,
            status: false,
            name: 'Peace',
            img: mers
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
                <Text style={styles.whosIn}>Choose Category</Text>
                <TouchableOpacity style={{padding:4}} onPress={() => props.onClose(data)}>
                    <Image source={close} style={styles.closeIc} />
                </TouchableOpacity>
            </View>
            <View style={styles.bottomSide}>
                {chooseData.map((item, index) => {
                    return <View key={index} style={styles.itemView}>
                        <SubmitItem
                            color={{ color: '#403D3D', fontSize: 16 }}
                            check={item.status}
                            valueChanged={() => {
                                setData(chooseData[index]);
                                chooseItem(index)
                            }}
                            name={item.name}
                        />
                        <Image source={item.img} style={styles.imgIc} />
                    </View>

                })}
            </View>
            <GlobalButton btnName="Submit" onSubmit={() => props.onClose(data)} />
        </Modal>
    )
}