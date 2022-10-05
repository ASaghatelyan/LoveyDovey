import {
    View, Text, ScrollView,
    TouchableOpacity, StatusBar,
     Image,
    SafeAreaView, 
} from 'react-native'
import React from 'react'
import { styles } from './style'
import { BgImage } from 'app/components'
import bg from 'app/assets/img/white.png'
import back from 'app/assets/img/back.png'
import moment from 'moment';



export function WantNeedItem(props) {

    return (
        <View style={{ flex: 1, height: '100%' }}>
            <BgImage img={bg} />
            <SafeAreaView >
                <StatusBar
                    animated={true}
                    barStyle='dark-content'
                    translucent={true} />
                <ScrollView contentContainerStyle={styles.content}  >
                    <View style={styles.topTitle}>
                        <TouchableOpacity onPress={() => props.navigation.goBack()}>
                            <Image source={back} style={styles.back} />
                        </TouchableOpacity>
                        <View style={styles.gFlex}>
                            <Text style={styles.titleText}>Want/Need</Text>
                        </View>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.bottomView}>
                        <Text style={styles.titleTop}>{props.route.params?.title}</Text>
                        {props.route.params.data.length > 0 && props.route.params?.data[0].map((item, index) => {
                            return (
                                <TouchableOpacity key={index}
                                    style={styles.itemView}
                                    onPress={() => props.navigation.navigate('WantNeedInfo', item
                                    )}>
                                    <Text style={styles.title}>{moment(item.start).format('DD MMM, YYYY')} - {moment(item.end).format('DD MMM, YYYY')}</Text>
                                    <Image source={props.route.params.img} style={[styles.icon]} />
                                </TouchableOpacity>)
                        })}
                    </ScrollView>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}