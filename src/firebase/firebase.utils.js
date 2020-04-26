import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAVoGYCLLE73o39qnVXe-NlbAl7NkriTS4",
    authDomain: "crwn-db-d546f.firebaseapp.com",
    databaseURL: "https://crwn-db-d546f.firebaseio.com",
    projectId: "crwn-db-d546f",
    storageBucket: "crwn-db-d546f.appspot.com",
    messagingSenderId: "332570522181",
    appId: "1:332570522181:web:0bdf79694b42dc52ab692c",
    measurementId: "G-6T5R34P9DH"
  }

firebase.initializeApp(config);  

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
