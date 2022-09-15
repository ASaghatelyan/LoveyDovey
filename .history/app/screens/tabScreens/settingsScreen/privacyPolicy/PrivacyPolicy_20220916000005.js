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
                         </Text>
                            <Text style={styles.title}> Children Under the Age of 18</Text>
                            <Text style={styles.text}>
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
                            {"\n"}  ·	From third parties, for example, our business partners. Information You Provide to Us
                            {"\n"}  ·	Information that y ou provide by filling in forms on our Services. This includes information provided at the time of registering to use our Services, subscribing to our Services, posting  material, or requesting further services. We may also ask you for information when you report a problem with our Services.
                            {"\n"}  ·	Records and copies of your correspondence (including email addresses), if you contact us.
                            {"\n"}  ·	Your responses to surveys that we might ask you to complete for research purposes.
                            {"\n"}  ·	De tails of transactions you carry out through our Services and of the fulfillment of your orders. You may be required to provide financial information before placing an order through our Services.
                            {"\n"}  ·	Your search queries on the Services.
                            {"\n"}You also may provide information to be published or displayed (hereinafter, "posted") on public areas of the Services, or transmitted to other users of the Services or third parties (collectively, "User Content"). Your User Content are posted on and transmitted to others at your own risk. Although we limit access to certain pages, please be aware that no security measures are perfect or impenetrable. Additionally, we cannot control the actions of other users of the Services with whom you may choose to share your User Content. Therefore, we cannot and do not guarantee that your User Content will not be viewed by unauthorized persons.
                            Information We Collect Through Automatic Data Collection Technologies
                            As you navigate through and interact with our Services, we may use automatic data collection technologies to collect certain information about your equipment, browsing actions, and patterns, including:
                            {"\n"}  ·	Details of your visits to our Services, including traffic data, location data, logs, and other communication data and the resources that you access and use on the Services.
                            {"\n"}  ·	Information about your computer and internet connection, including your device type, device identifiers, IP address, operating system, and browser type.
                            {"\n"}  ·	Our Services may also access metadata and other information associated with other files stored on your computer or device. This may include, for example, photographs, audio and video clips, personal contacts, and address book information.
                            {"\n"}  The information we collect automatically is only statistical data and does not include personal information, but we may maintain it or associate it with personal information we collect in other ways or receive from third parties. It helps us to improve our Services and to deliver a better and more personalized service, including by enabling us to:
                            {"\n"}  ·	Estimate our audience size and usage patterns.
                            {"\n"}  ·	Store information about your preferences, allowing us to customize our Services according to your individual interests.
                            {"\n"}  ·	Speed up your searches.
                            {"\n"}  ·	Recognize you when you return to our Services.
                            {"\n"}  The technologies we use for this automatic data collection may include:
                            {"\n"}  ·	Cookie . A cookie is a small file placed on the hard drive of your computer. You may refuse to accept browser cookies by activating the appropriate setting on your browser. However, if you select this setting you may be unable to access certain parts of our Services. Unless you have adjusted your browser setting so that it will refuse cookies, our system will issue cookies when you direct your browser to our Services. 
                            {"\n"}  ·	Flash Cookies. Certain features of our Services may use local stored objects (or Flash cookies) to collect and store information about your preferences and navigation to, from, and on our Website. Flash cookies are not managed by the same browser settings as are used for browser cookies. For information about managing your privacy and security settings for Flash cookies, see Choices About How We Use and Disclose Your Information.
                            {"\n"}  ·	Web Beacons. Pages of our the Services and our e-mails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of certain website content and verifying system and server integrity). 
                            {"\n"}  We do not collect personal information automatically, but we may tie this information to personal information about you that we collect from other sources or you provide to us.
                         
                        </Text>

                        <Text style={styles.title}>How We Use Your Information</Text>
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