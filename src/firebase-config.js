// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFireStore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApY-gTSCJ4kc3nUJZ5rnbNWApEWExCyjM",
  authDomain: "react-crud-50c36.firebaseapp.com",
  projectId: "react-crud-50c36",
  storageBucket: "react-crud-50c36.appspot.com",
  messagingSenderId: "573600382799",
  appId: "1:573600382799:web:627d74a0bd032337ff8f3a",
  measurementId: "G-R06NC2SH43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFireStore(app);