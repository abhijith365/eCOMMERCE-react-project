import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBKOd5x3i6PZbVR-xUdC8buTGllbO5BbN4",
    authDomain: "e-commerce-site-84f97.firebaseapp.com",
    projectId: "e-commerce-site-84f97",
    storageBucket: "e-commerce-site-84f97.appspot.com",
    messagingSenderId: "206345944518",
    appId: "1:206345944518:web:56df027e30d365d4dd06c7",
    measurementId: "G-GWVYR6Y10Y"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };