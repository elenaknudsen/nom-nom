// Adding backend functionality
// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import getDatabase from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
let firebaseConfig = {
    apiKey: "AIzaSyDeiURWl2CJdCCmM8Aox6htxpe23aTfHoE",
    authDomain: "nom-nom-fd636.firebaseapp.com",
    // Adding database
    databaseURL: "https://console.firebase.google.com/u/0/project/nom-nom-fd636/database/nom-nom-fd636-default-rtdb/data/~2F",
    projectId: "nom-nom-fd636",
    storageBucket: "nom-nom-fd636.appspot.com",
    messagingSenderId: "262953897556",
    appId: "1:262953897556:web:03b7212769dd2a068fa7c1",
    measurementId: "G-HPBXJK9DQF"
};

console.log(firebaseConfig);
// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default firebaseConfig;