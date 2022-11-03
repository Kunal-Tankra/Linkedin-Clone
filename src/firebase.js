import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import * as firebase_tools from "firebase-tools";

const firebaseConfig = {
    apiKey: "AIzaSyCaAQPmj4vn9zpDJrJQJh-BuRhpNZJ4ARQ",
    authDomain: "linkedin-clone-f882e.firebaseapp.com",
    projectId: "linkedin-clone-f882e",
    storageBucket: "linkedin-clone-f882e.appspot.com",
    messagingSenderId: "667270245082",
    appId: "1:667270245082:web:c8af1114773295f12553e3"
  };

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };