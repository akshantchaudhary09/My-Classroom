// import { initializeApp } from "firebase/app";
// import "firebase/auth";
import firebase from 'firebase/app';
import 'firebase/auth';
// console.log(process.env.REACT_APP_FIREBASE_API_KEY)
// console.log(process.env.REACT_APP_FIREBASE_AUTH_DOMAIN)
const firebaseApp = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
})

export const auth = firebaseApp.auth();
export default firebaseApp;
export const provider = new firebase.auth.GoogleAuthProvider();