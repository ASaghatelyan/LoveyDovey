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

export function TermsCondition(props) {
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
                            <Text style={styles.titleText}>Terms And Conditions</Text>
                        </View>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false} style={styles.inputView}>
                        <Text style={styles.text}>LoveyDovey Terms of Use</Text>
                        <Text style={styles.text}>Version: 1.0.0 Last Updated: 14.09.2022</Text>
                        <Text style={styles.title}>1. Acceptance</Text>
                        <Text style={styles.text}>These terms of use are entered into by and between You and YourSolutions, Inc. d/b/a LoveyDovey (”LoveyDovey,” “we,” or “us”). The following terms and conditions, together with any documents they expressly incorporate by reference (collectively the “Terms of Use” or “Terms”), govern your access to and use of www.loveydovey.com, including any content, functionality, and services offered on or through www.loveydovey.com (the “Services”), whether as a guest or a registered user.</Text>
                        <Text style={styles.text}>Please read these Terms of Use carefully before you start to use the Services. By using the Services or by clicking to accept or agree to the Terms of Use when this option is made available to you, you accept and agree to be bound and abide by these Terms of Use and our Privacy Policy, found at [PRIVACY POLICY URL], incorporated herein by reference. If you do not want to agree to these Terms of Use or the Privacy Policy, you must not access or use the Services.</Text>
                        <Text style={styles.text}>The Services are offered and available to users who are 18 years of age or older. By using the Services, you represent and warrant that you are of legal age to form a binding contract with LoveyDovey. If you are not, you must not access or use the Services.</Text>
                        <Text style={styles.title}>2. Changes to the Terms of Use</Text>
                        <Text style={styles.text}>We may revise and update these Terms of Use from time to time in our sole discretion. All changes are effective immediately when they are posted online, and apply to all access to and use of the Services thereafter.</Text>
                        <Text style={styles.text}>Your continued use of the Services following the posting of revised Terms of Use means that you accept and agree to the changes. Therefore, we recommend that you check this page from time to time so you are aware of any changes, as they are binding on you.</Text>
                        <Text style={styles.title}>3. Accessing the Services and Account Security</Text>
                        <Text style={styles.text}>We reserve the right to modify, withdraw, or amend the Services, and any features, services, or materials we provide through the Services, in our sole discretion, without notice to you, at any time. We will not be liable if for any reason all or any part of the Services is unavailable at any time or for any period. From time to time, we may restrict access to some parts of the Services, or the entire Services, to users, including registered users for reasons such as, but not limited to, scheduled or emergency maintenance, or software updates.</Text>
                        <Text style={styles.text}>
                            You are responsible for:
                            {"\n"}   •	Making  and maintaining all arrangements necessary for you to have access to the Services, including, but not limited to ensuring a working internet or other network connection.
                            {"\n"}   •	Ensuring that all persons who access the Services through your internet connection are aware of these Terms of Use and comply with them.
                            To access the Services or some of the resources offered therein, you may be asked to provide certain registration details or other information. It is a condition of your use of the Services that all the information you provide on the Services is correct, current, and complete. You agree that all information you provide to register with the Services or otherwise, including, but not limited to, through the use of any interactive features on the Services, is governed by our Privacy Policy [LINK TO PRIVACY POLICY], and you consent to all actions we take with respect to your information consistent with our Privacy Policy.
                        </Text>
                        <Text style={styles.text}>If you choose, or are provided with, a username, password, or any other piece of information as part of our security procedures, you must treat such information as confidential, and you must not disclose it to any other person or entity. You also acknowledge that your account is personal to you and agree not to provide any other person with access to the Services or portions of it using your username, password, or other security information. You agree that it is your responsibility to maintain the security of your account information.  You agree to notify us immediately of any unauthorized access to or use of your username or password or any other breach of security. You also agree to ensure that you will exit or logout from your account at the end of each session. You should use particular caution when accessing your account from a public or shared computer so that others are not able to view or record your password or other personal information.</Text>
                        <Text style={styles.text}>We have the right to disable any username, password, or other identifier, whether chosen by you or provided by us, at any time in our sole discretion for any or no reason, including if, in our opinion, you have violated any provision of these Terms of Use.</Text>

                        <Text style={styles.title}>4. Intellectual Property Rights</Text>
                        <Text style={styles.text}>The Services and their entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by LoveyDovey, its licensors, or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</Text>
                        <Text style={styles.text}>These Terms of Use permit you to use the Services for your personal, non-commercial use only, unless you have entered into a separate agreement with LoveyDovey for the commercial use of the Services. You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Services, except as follows:</Text>
                        <Text style={styles.text}>{"\n"} •	Your computer may temporarily store copies of such materials in RAM incidental to your accessing and viewing those materials.
                            {"\n"} •	You may store files that are automatically cached by your Web browser for display enhancement purposes.
                            {"\n"} •	You may print or download one copy of a reasonable number of pages of the Services for your own personal, non-commercial use and not for further reproduction, publication, or distribution.
                            {"\n"} •	If we provide desktop, mobile, or other applications for download, you may download a single copy to your computer or mobile device solely for your own personal, non-commercial use, provided you agree to be bound by our end user license agreement for such applications.
                            {"\n"} •	If we provide social media features with certain content, you may take such actions as are enabled by such features, however only if such actions are in strict compliance with the usage terms of such features.
                            You must not:
                        </Text>
                        <Text style={styles.text}>{"\n"}  •	Modify copies of any materials from this site.
                            {"\n"} •	Delete or alter any copyright, trademark, or other proprietary rights notices from copies of materials from this site.
                            You must not access or use for any commercial purposes any part of the Services or any services or materials available through the Services.
                            If you print, copy, modify, download, or otherwise use or provide any other person with access to any part of the Services in breach of the Terms of Use, your right to use the Services will stop immediately and you must, at our option, return or destroy any copies of the materials you have made. No right, title, or interest in or to the Services or any content on the Services is transferred to you, and all rights not expressly granted pursuant to these Terms of Use are reserved by LoveyDovey. Any use of the Services not expressly permitted by these Terms of Use is a breach of these Terms of Use and may violate copyright, trademark, and other laws.</Text>


                        <Text style={styles.title}>5. Trademarks</Text>
                        <Text style={styles.text}>The LoveyDovey name, the LoveyDovey logo, and all related names, logos, product and service names, designs, and slogans are trademarks of LoveyDovey or its affiliates or licensors. You must not use such marks without the prior written permission of LoveyDovey. All other names, logos, product and service names, designs, and slogans on the Services are the trademarks of their respective owners.</Text>
                        <Text style={styles.title}>6.	Prohibited Uses</Text>
                        <Text style={styles.text}>You may use the Services only for lawful purposes and in accordance with these Terms of Use. You agree not to use the Services:</Text>
                        <Text style={styles.text}>{"\n"} •	In any way that violates any applicable federal, state, local, or international law or regulation (including, without limitation, any laws regarding the export of data or software to and from the US or other countries).
                            {"\n"} •	For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing them to inappropriate content, asking for personally identifiable information, or otherwise.
                            {"\n"} •	To transmit, or procure the sending of, any advertising or promotional material, including any “junk mail,” “chain letter,” “spam,” or any other similar solicitation, including using of any portion of the Service as a destination linked from any unsolicited bulk messages or unsolicited commercial messages.
                            {"\n"} •	To impersonate or attempt to impersonate LoveyDovey, a LoveyDovey employee, another user, or any other person or entity (including, without limitation, by using email addresses associated with any of the foregoing).
                            {"\n"} •	To engage in any other conduct that restricts or inhibits anyone’s use or enjoyment of the Services, or which, as determined by us, may harm LoveyDovey or users of the Services, or expose them to liability.
                            Additionally, you agree not to:
                        </Text>
                        <Text style={styles.text}>
                            {"\n"} •	Use the Services in any manner that could disable, overburden, damage, or impair the site or interfere with any other party’s use of the Services, including their ability to engage in real time activities through the Services.
                            {"\n"} •	Use any robot, spider, or other automatic device, process, or means to access the Services for any purpose, including monitoring or copying any of the material on the Services.
                            {"\n"} •	Use any manual process to monitor or copy any of the material on the Services, or for any other purpose not expressly authorized in these Terms of Use, without our prior written consent.
                            {"\n"} •	Sell, resell, distribute, host, lease, rent, license, or sublicense, in whole or in part, the Services or use the Services to provide processing services to third parties, or otherwise use the same on a ‘service bureau’ basis;
                            {"\n"} •	Use any device, software, or routine that interferes with the proper working of the Services.
                            {"\n"} •	Introduce any viruses, Trojan horses, worms, logic bombs, or other material that is malicious or technologically harmful.
                            {"\n"} •	Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the Services, the server on which the Services is stored, or any server, computer, or database connected to the Services.
                            {"\n"} •	Attack the Services via a denial-of-service attack or a distributed denial-of-service attack.
                            {"\n"} •	Otherwise attempt to interfere with the proper working of the Services.

                        </Text>
                        <Text style={styles.title}>7. User Content</Text>
                        <Text style={styles.text}>The Services may contain message boards, chat rooms, personal web pages or profiles, forums, bulletin boards, and other interactive features (collectively, “Interactive Services”) that allow users to post, submit, publish, display, or transmit to other users or other persons (hereinafter, “post”) content or materials (collectively, “User Content”) on or through the Services.
                        </Text>
                        <Text style={styles.text}>The Services may contain message boards, chat rooms, personal web pages or profiles, forums, bulletin boards, and other interactive features (collectively, “Interactive Services”) that allow users to post, submit, publish, display, or transmit to other users or other persons (hereinafter, “post”) content or materials (collectively, “User Content”) on or through the Services.
                        </Text>
                        <Text style={styles.text}>Any User Content you post to the site will be considered non-confidential and non-proprietary. By providing any User Content on the Services, you grant us and our affiliates and service providers, and each of their and our respective licensees, successors, and assigns the right to use, reproduce, modify, perform, display, distribute, and otherwise disclose to third parties any such material.
                        </Text>
                        <Text style={styles.text}>
                            You represent and warrant that:
                            {"\n"} •	You own or control all rights in and to the User Content and have the right to grant the license granted above to us and our affiliates and service providers, and each of their and our respective licensees, successors, and assigns.
                            {"\n"} •	All of your User Content do and will comply with these Terms of Use.
                            You understand and acknowledge that you are responsible for any User Content you submit or contribute, and you, not LoveyDovey, have full responsibility for such content, including its legality, reliability, accuracy, and appropriateness.
                        </Text>
                        <Text style={styles.text}>
                            We are not responsible or liable to any third party for the content or accuracy of any User Content posted by you or any other user of the Services.
                        </Text>
                        <Text style={styles.title}>8. Monitoring and Enforcement; Termination </Text>
                        <Text style={styles.text}>
                            We have the right to:
                            {"\n"} •	Remove or refuse to post any User Content for any or no reason in our sole discretion.
                            {"\n"} •	Take any action with respect to any User Content that we deem necessary or appropriate in our sole discretion, including if we believe that such User Content violates the Terms of Use, infringes any intellectual property right or other right of any person or entity, threatens the personal safety of users of the Services or the public, or could create liability for LoveyDovey.
                            {"\n"} •	Disclose your identity or other information about you to any third party who claims that material posted by you violates their rights, including their intellectual property rights or their right to privacy.
                            {"\n"} •	Take appropriate legal action, including without limitation, referral to law enforcement, for any illegal or unauthorized use of the Services.
                            {"\n"} •	Terminate or suspend your access to all or part of the Services for any or no reason, including without limitation, any violation of these Terms of Use.
                            Without limiting the foregoing, we have the right to cooperate fully with any law enforcement authorities or court order requesting or directing us to disclose the identity or other information of anyone posting any materials on or through the Services. YOU WAIVE AND HOLD HARMLESS LOVEYDOVEY AND ITS AFFILIATES, LICENSEES, AND SERVICE PROVIDERS FROM ANY CLAIMS RESULTING FROM ANY ACTION TAKEN BY ANY OF THE FOREGOING PARTIES DURING, OR TAKEN AS A CONSEQUENCE OF, INVESTIGATIONS BY SUCH PARTIES OR LAW ENFORCEMENT AUTHORITIES.
                            However, we cannot review material before it is posted on the Services, and cannot ensure prompt removal of objectionable material after it has been posted. Accordingly, we assume no liability for any action or inaction regarding transmissions, communications, or content provided by any user or third party. We have no liability or responsibility to anyone for performance or nonperformance of the activities described in this section.
                            This agreement shall continue until such time as either party terminates.  You may terminate without cause by deactivating the account from “your account” page.
                        </Text>
                        <Text style={styles.title}>9. Content Standards </Text>
                        <Text style={styles.text}>These Content Standards apply to any and all User Content and use of Interactive Services. User Content must in their entirety comply with all applicable federal, state, local, and international laws and regulations. Without limiting the foregoing, User Content must not:</Text>
                        <Text style={styles.text}>
                            {"\n"} •	Contain any material that is defamatory, obscene, indecent, abusive, offensive, harassing, violent, hateful, inflammatory, or otherwise objectionable.
                            {"\n"} •	Promote sexually explicit or pornographic material, violence, or discrimination based on race, sex, religion, nationality, disability, sexual orientation, or age.
                            {"\n"} •	Infringe any patent, trademark, trade secret, copyright, or other intellectual property or other rights of any other person.
                            {"\n"} •	Violate the legal rights (including the rights of publicity and privacy) of others or contain any material that could give rise to any civil or criminal liability under applicable laws or regulations or that otherwise may be in conflict with these Terms of Use and our Privacy Policy [LINK TO PRIVACY POLICY].
                            {"\n"} •	Be likely to deceive any person.
                            {"\n"} •	Promote any illegal activity, or advocate, promote, or assist any unlawful act.
                            {"\n"} •	Cause annoyance, inconvenience, or needless anxiety or be likely to upset, embarrass, alarm, or annoy any other person.
                            {"\n"} •	Impersonate any person, or misrepresent your identity or affiliation with any person or organization.
                            {"\n"} •	Involve commercial activities or sales, such as contests, sweepstakes, and other sales promotions, barter, or advertising.
                            {"\n"} •	Give the impression that they emanate from or are endorsed by us or any other person or entity, if this is not the case.
                        </Text>
                        <Text style={styles.title}>10. Copyright Infringement</Text>
                        <Text style={styles.text}>LoveyDovey respects the intellectual property rights of others and expects users of the Services to do the same. We will respond to notices of alleged copyright infringement that comply with applicable law and are properly provided to us. If you believe that your copyrighted materials have been copied in a way that constitutes copyright infringement, please provide us with the following information: (i) a physical or electronic signature of the copyright owner or a person authorized to act on their behalf; (ii) identification of the copyrighted work claimed to have been infringed; (iii) identification of the material that is claimed to be infringing or to be the subject of infringing activity and that is to be removed or access to which is to be disabled, and information reasonably sufficient to permit us to locate the material; (iv) your contact information, including your address, telephone number, and an email address; (v) a statement by you that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law; and (vi) a statement that the information in the notification is accurate, and, under penalty of perjury, that you are authorized to act on behalf of the copyright owner.
                        </Text>
                        <Text style={styles.text}>We reserve the right to remove User Content alleged to be infringing without prior notice and at our sole discretion. In appropriate circumstances, LoveyDovey will also terminate a user’s account if the user is determined to be a repeat infringer.  Our designated copyright agent for notice of alleged copyright infringement appearing on the Service is:
                        </Text>
                        <Text style={styles.text}></Text>
                        <Text style={styles.infoText}>YourSolutions, Inc.  </Text>
                        <Text style={styles.infoText}>Address: [ADDRESS] </Text>
                        <Text style={styles.infoText}>Email: [EMAIL] </Text>
                        <Text style={styles.title}>11. Reliance on Information Posted</Text>
                        <Text style={styles.text}>The information presented on or through the Services is made available solely for general information purposes. We do not warrant the accuracy, completeness, or usefulness of this information. Any reliance you place on such information is strictly at your own risk. We disclaim all liability and responsibility arising from any reliance placed on such materials by you or any other visitor to the Services, or by anyone who may be informed of any of its contents.
                        </Text>
                        <Text style={styles.text}>LoveyDovey is not responsible for the results of your use of the Services or any information made available through the Services, including, but not limited to, lack of improvement of personal relationships or the termination of a romantic personal relationship.
                        </Text>
                        <Text style={styles.text}>The Services may include content provided by third parties, including materials provided by other users, bloggers, and third-party licensors, syndicators, aggregators, and/or reporting services. All statements and/or opinions expressed in these materials, and all articles and responses to questions and other content, other than the content provided by LoveyDovey, are solely the opinions and the responsibility of the person or entity providing those materials. These materials do not necessarily reflect the opinion of LoveyDovey. We are not responsible, or liable to you or any third party, for the content or accuracy of any materials provided by any third parties.
                        </Text>


                        <Text style={styles.title}>12. Changes to the Services
                        </Text>
                        <Text style={styles.text}>We may update the content on the Services from time to time, but its content is not necessarily complete or up-to-date. Any of the material on the Services may be out of date at any given time, and we are under no obligation to update such material.
                        </Text>

                        <Text style={styles.title}>13.	Information About You and Your Visits to the Services</Text>
                        <Text style={styles.text}>All information we collect on the Services is subject to our Privacy Policy [LINK TO PRIVACY POLICY]. By using the Services, you consent to all actions taken by us with respect to your information in compliance with the Privacy Policy.
                        </Text>

                        <Text style={styles.title}>14.	Other Terms and Conditions</Text>
                        <Text style={styles.text}>
                            Additional agreements or terms and conditions may also apply to specific portions, services, or features of the Services. All such additional agreements or terms and conditions are hereby incorporated by this reference into these Terms of Use. Where such additional agreements or terms and conditions and these Terms conflict, the additional terms and conditions shall control.
                        </Text>

                        <Text style={styles.title}>15.	Linking to the Services
                        </Text>
                        <Text style={styles.text}>
                            You may link to our homepage, provided you do so in a way that is fair and legal and does not damage our reputation or take advantage of it, but you must not establish a link in such a way as to suggest any form of association, approval, or endorsement on our part without our express written consent.
                        </Text>
                        <Text style={styles.text}>
                            The Services may provide certain social media features that enable you to:
                        </Text>
                        <Text style={styles.text}>
                            {"\n"} •	Link from your own or certain third-party websites to certain content on the Services.
                            {"\n"} •	Send emails or other communications with certain content, or links to certain content, on the Services.
                            {"\n"} •	Cause limited portions of content on the Services to be displayed or appear to be displayed on your own or certain third-party websites.
                            You may use these features solely as they are provided by us and otherwise in accordance with any additional terms and conditions we provide with respect to such features. Subject to the foregoing, you must not:
                        </Text>
                        <Text style={styles.text}>
                            {"\n"} •	Establish a link from any website that is not owned by you.
                            {"\n"} •	Cause the Services or portions of it to be displayed on, or appear to be displayed by, any other site, for example, framing, deep linking, or in-line linking.
                            {"\n"} •	Link to any part of the Services other than the homepage.
                            {"\n"} •	Otherwise take any action with respect to the materials on the Services that is inconsistent with any other provision of these Terms of Use.
                            {"\n"}You agree to cooperate with us in causing any unauthorized framing or linking immediately to stop. We reserve the right to withdraw linking permission without notice.
                        </Text>

                        <Text style={styles.title}>16. Links from the Services</Text>
                        <Text style={styles.text}>
                            If the Services contains links to other sites and resources provided by third parties, these links are provided for your convenience only. This includes links contained in advertisements, including banner advertisements and sponsored links. We have no control over the contents of those sites or resources, and accept no responsibility for them or for any loss or damage that may arise from your use of them. If you decide to access any of the third-party websites linked to the Services, you do so entirely at your own risk and subject to the terms and conditions of use for such websites.
                        </Text>

                        <Text style={styles.title}>17. Consent to Receive Emails and Notice</Text>
                        <Text style={styles.text}>
                            By using the Services, you consent to receive emails from LoveyDovey, which may include commercial emails. We may use your information to send you news or product updates. You may “opt out” of receiving marketing or promotional email from LoveyDovey by following “unsubscribe” instructions or using “unsubscribe” links within communications we send. As long as you maintain an account, you may not "opt out" of receiving account-related emails from LoveyDovey.  The parties hereto may give legal notice by means of electronic mail, which electronic mail shall be considered delivered when sent.  The notice address of LoveyDovey shall be [EMAIL] (or such other address as is provided by LoveyDovey to you) via email at your Notice address and your address for the receipt of notices pursuant to this Agreement shall be the current email address listed by you in your account profile.
                        </Text>
                        <Text style={styles.title}>18. Geographic Restrictions</Text>
                        <Text style={styles.text}>
                            The owner of the Services is based in the State of [STATE] in the United States. We provide the Services for use only by persons located in the United States. We make no claims that the Services or any of its content is accessible or appropriate outside of the United States. Access to the Services may not be legal by certain persons or in certain countries. If you access the Services from outside the United States, you do so on your own initiative and are responsible for compliance with local laws.
                        </Text>
                        <Text style={styles.title}>19.	Disclaimer of Warranties</Text>
                        <Text style={styles.text}>You understand that we cannot and do not guarantee or warrant that files available for downloading from the internet or the Services will be free of viruses or other destructive code. You are responsible for implementing sufficient procedures and checkpoints to satisfy your particular requirements for anti-virus protection and accuracy of data input and output, and for maintaining a means external to our site for any reconstruction of any lost data.
                        </Text>
                        <Text style={styles.text}>
                            TO THE FULLEST EXTENT PROVIDED BY LAW, WE WILL NOT BE LIABLE FOR ANY LOSS OR DAMAGE CAUSED BY A DISTRIBUTED DENIAL-OF-SERVICE ATTACK, VIRUSES, OR OTHER TECHNOLOGICALLY HARMFUL MATERIAL THAT MAY INFECT YOUR COMPUTER EQUIPMENT, COMPUTER PROGRAMS, DATA, OR OTHER PROPRIETARY MATERIAL DUE TO YOUR USE OF THE SERVICES OR ANY WEBSITE OR ITEMS OBTAINED THROUGH THE SERVICES OR TO YOUR DOWNLOADING OF ANY MATERIAL POSTED ON THE SERVICES, WEBSITE, OR ON ANY WEBSITE LINKED TO IT.
                        </Text>
                        <Text style={styles.text}>
                            YOUR USE OF THE SERVICES, WEBSITE, ITS CONTENT, AND ANY ITEMS OBTAINED THROUGH THE SERVICES IS AT YOUR OWN RISK. THE SERVICES, WEBSITE, ITS CONTENT, AND ANY ITEMS OBTAINED THROUGH THE SERVICES ARE PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHE
                        </Text>



                    </ScrollView>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}