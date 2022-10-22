import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDE941QZVf3A2cOafI0WwxP_u3orTLVg8s",
    authDomain: "amzn-clone-ed391.firebaseapp.com",
    projectId: "amzn-clone-ed391",
    storageBucket: "amzn-clone-ed391.appspot.com",
    messagingSenderId: "562178124097",
    appId: "1:562178124097:web:7a0bc83eb39a927d32d9c0",
    measurementId: "G-MWJEJHLC7S"
  };

 const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };