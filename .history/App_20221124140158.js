import React, { useEffect } from 'react'
import { View, Text, Platform, Linking } from 'react-native'

import MainNAvigation from './app/navigation/MainNAvigation'
import dynamicLinks from '@react-native-firebase/dynamic-links';
import firebase from '@react-native-firebase/app';




export default function App() {
  const iosCredentials = {
    apiKey: "AIzaSyAAMse0dsiH-ZSPLpH_pbjE4GRZvgTr9WQ",
    authDomain: "loveydovey-613f5.firebaseapp.com",
    projectId: "loveydovey-613f5",
    storageBucket: "loveydovey-613f5.appspot.com",
    messagingSenderId: "705888184535",
    databaseURL: 'https://loveydovey-613f5.firebaseio.com',
    appId: "1:705888184535:ios:714c99a96011879e962892",
    measurementId: "G-5LP021LCTF"
  };

  const androidCredentials = {
    clientId: '',
    appId: '',
    apiKey: '',
    databaseURL: '',
    storageBucket: '',
    messagingSenderId: '',
    projectId: '',
  };

  // const credentials = Platform.select({
  //   android: androidCredentials,
  //   ios: iosCredentials,
  // })

  if (!firebase.apps.length) {
    (async () => await firebase.initializeApp(iosCredentials))()
    
  }

  const buildLink = async () => {
    let link = await axios({
      method: 'POST',
      url: `https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=AIzaSyBWMeTQk3_9x57QesSgMAyxMjsHaOrrXIs`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        dynamicLinkInfo: {
          domainUriPrefix: 'https://loveydovey.page.link/y1E4',
          link: fallbackURL,
          androidInfo: {
            androidPackageName: 'com.anianimelist',
          },
        },
      },
    });
    if (link.status === 200) {
      return link.data.shortLink;
    }
  };

  useEffect(() => {
    // dynamicLinks().getInitialLink().then((link) => {
    //   console.log(link, 'rlkjgfhjrgbhjkf');
    //   handleDynamicLink(link)
    //   console.log(link, 'dddd');
    // })
    // const linkingListener = dynamicLinks().onLink(handleDynamicLink);
    // return () => {
    //   linkingListener();
    // }
  }, [])

  const handleDynamicLink = (link) => {
    if (!!link?.url) {
      let getId = link.url?.split('=').pop()
      console.log("user id", getId)
      setTimeout(() => {
        // NavigationService.navigate('UserDetail', { userId: getId })
      }, 1000);
    }
  }


  return (
    <MainNAvigation />
  )
}