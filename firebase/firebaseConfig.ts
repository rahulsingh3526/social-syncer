// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// import "firebase/auth";
import { getAuth, GoogleAuthProvider, EmailAuthProvider } from "firebase/auth";
// Your web app's Firebase configuration
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtovkdSqftza2GlCPLqe-RGMlgWuoPRbg",
  authDomain: "buidl-11d19.firebaseapp.com",
  databaseURL: "https://buidl-11d19-default-rtdb.firebaseio.com",
  projectId: "buidl-11d19",
  storageBucket: "buidl-11d19.appspot.com",
  messagingSenderId: "984007285118",
  appId: "1:984007285118:web:b7e40bff6fb89096f9bb2f",
  measurementId: "G-068WZZSTZK",
};

let app: any;

if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp(); // if already initialized, use that one
}

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// const uiConfig = {
//   signInFlow: "popup",
//   signInSuccessUrl: "/",
// //   signInOptions: [
// //     GoogleAuthProvider.PROVIDER_ID,
// //     EmailAuthProvider.PROVIDER_ID,
// //   ],
// };

export { app, db, firebaseConfig, auth };
