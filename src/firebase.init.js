// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAtUmtlDUwwSCKFWsOPMKufwzKEvFjuvaw",
    authDomain: "ema-jon-simple-8a958.firebaseapp.com",
    projectId: "ema-jon-simple-8a958",
    storageBucket: "ema-jon-simple-8a958.appspot.com",
    messagingSenderId: "190882271915",
    appId: "1:190882271915:web:78350d266229ee91b59dee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;