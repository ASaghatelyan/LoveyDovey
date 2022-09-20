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


export function PrivacyPolicy(props) {
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
                            <Text style={styles.titleText}>Privacy Policy</Text>
                        </View>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false} style={styles.inputView}>
                        <Text style={styles.text}>LoveyDovey Privacy Policy
                            Last modified: 14.09.2022</Text>
                        <Text style={styles.title}>Introduction</Text>
                        <Text style={styles.text}>
                            YourSolutions, Inc. d/b/a LoveyDovey (“LoveyDovey” or “We”) respect your privacy and are committed to protecting it through our compliance with this policy.
                            This policy describes the types of information we may collect from you or that you may provide when you: (i) visit our website [INSERT DOMAIN NAME] (our “Website”); (ii) download, install, register with, access, or use the LoveyDovey mobile application (the “App”); or (iii) utilize the other services we provide (collectively the Website, App, and other services we provide constitute our “Services”); and our practices for collecting, using, maintaining, protecting, and disclosing that information.
                            This policy applies to information we collect:
                            {"\n"}
                        </Text>

                        <Text style={styles.title}></Text>
                        <Text style={styles.text}></Text>
                        <Text style={styles.title}></Text>
                        <Text style={styles.text}></Text>
                        <Text style={styles.title}></Text>
                        <Text style={styles.text}></Text>
                    </ScrollView>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}