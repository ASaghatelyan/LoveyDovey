import firebase from 'firebase/app';
import 'firebase/firestore'

 
const firebaseConfig = {
    apiKey: "AIzaSyAAMse0dsiH-ZSPLpH_pbjE4GRZvgTr9WQ",
    authDomain: "loveydovey-613f5.firebaseapp.com",
    projectId: "loveydovey-613f5",
    storageBucket: "loveydovey-613f5.appspot.com",
    messagingSenderId: "705888184535",
    appId: "1:705888184535:web:81e382b19e5e5774962892",
    measurementId: "G-5LP021LCTF"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore()
