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
                            {"\n"} ·	On the Website;
                            {"\n"} ·	Through the App; and
                            {"\n"} ·	In email, text, and other electronic messages between you and LoveyDovey through the Services.
                            {"\n"} It does not apply to information collected by:
                            {"\n"} ·	Any third party, including through any application or content (including advertising) that may link to or be accessible from or on the Services.
                            Our websites and apps, and these other third parties may have their own privacy policies, which we encourage you to read before providing information on or through them.
                            Please read this policy carefully to understand our policies and practices regarding your information and how we will treat it. If you do not agree with our policies and practices, your choice is to not use our Services. By accessing or using the Services, you agree to this privacy policy. This policy may change from time to time (see Changes to Our Privacy Policy). Your continued use of the Services after we make changes is deemed to be acceptance of those changes, so please check the policy periodically for updates.
                            {"\n"}
                            {"\n"}  Children Under the Age of 18
                            {"\n"}  
                            {"\n"}Our Services are not intended for children under 18 years of age. No one under age 18 may provide any information to or on our Services. We do not knowingly collect personal information from children under 18. If you are under 18, do not use or provide any information on the Services or through any of their features, register for the Services, use any of the interactive or public comment features of the Services, or provide any information about yourself to us, including your name, address, telephone number, email address, or any screen name or user name you may use. If we learn we have collected or received personal information from a child under 18 without verification of parental consent, we will delete that information. If you believe we might have any information from or about a child under 18, please contact us at [EMAIL].
                            {"\n"}  
                            {"\n"}  Information We Collect About You and How We Collect It
                            {"\n"}  
                            {"\n"}  We collect several types of information from and about users of our Services, including information:
                            {"\n"}  
                            {"\n"}  ·	By which you may be personally identified, such as name, postal address, e-mail address, telephone number, username, and location ("personal information");
                            {"\n"}  ·	That is about you but individually does not identify you, such as your income, education, sex, gender identity, ethnicity, usage details for the Services; and/or
                            {"\n"}  ·	About your internet connection, the equipment you use to access our Services, and usage details.
                            {"\n"}  We collect this information:
                            {"\n"}  ·	Directly from you when you provide it to us.
                            {"\n"}  ·	Automatically as you navigate through and use our Services. Information collected automatically may include usage details, IP addresses, and information collected through cookies.
                            {"\n"}  
                            {"\n"}  
                            {"\n"}  
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