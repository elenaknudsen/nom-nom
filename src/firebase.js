// Adding backend functionality
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDeiURWl2CJdCCmM8Aox6htxpe23aTfHoE",
    authDomain: "nom-nom-fd636.firebaseapp.com",
    projectId: "nom-nom-fd636",
    storageBucket: "nom-nom-fd636.appspot.com",
    messagingSenderId: "262953897556",
    appId: "1:262953897556:web:03b7212769dd2a068fa7c1",
    measurementId: "G-HPBXJK9DQF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
