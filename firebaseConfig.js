import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import {initializeApp} from 'firebase/app';
import {collection, getFirestore} from 'firebase/firestore';
// import "firebase/firestore";
// import firebase from "firebase";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB94aUI4ZcBBDUl2ooheomf1qMolQjABEA",
    authDomain: "botmd-c98a7.firebaseapp.com",
    databaseURL: "https://botmd-c98a7-default-rtdb.firebaseio.com",
    projectId: "botmd-c98a7",
    storageBucket: "botmd-c98a7.appspot.com",
    messagingSenderId: "56418556348",
    appId: "1:56418556348:web:3f0811b82372ab018df3b9"

};
// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();


// const setting = FirestoreSettings({experimentalForceLongPolling: true})
// firebase.initializeApp(firebaseConfig);
// console.log("getfirestore...",getFirestore)
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app, {experimentalForceLongPolling: true});
export const auth = getAuth(app);
export const collectionRef = collection(database, "Users")
export const googleAuthProvider = new GoogleAuthProvider();
export const signInWithGoogle = () => signInWithPopup(auth, googleAuthProvider);
