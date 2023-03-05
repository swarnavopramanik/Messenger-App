// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApgW8MMFDs8AtM-dSqy97ZFjck_Uvgf4M",
  authDomain: "messenger-app-52938.firebaseapp.com",
  projectId: "messenger-app-52938",
  storageBucket: "messenger-app-52938.appspot.com",
  messagingSenderId: "160242940486",
  appId: "1:160242940486:web:ea6bf864d8d5b43dd82847"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)