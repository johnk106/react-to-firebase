// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBr2AeRdCsE0s8B4Sbz9plUOC-xxjP9Hoc",
  authDomain: "firestore-4ae97.firebaseapp.com",
  projectId: "firestore-4ae97",
  storageBucket: "firestore-4ae97.appspot.com",
  messagingSenderId: "180372674922",
  appId: "1:180372674922:web:9e6fad900ac9965f23ad13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default app;