import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAv2c9vV72U2Kh4K8CVUVWAl9aqzAeNfFY",
    authDomain: "educacao-70da8.firebaseapp.com",
    projectId: "educacao-70da8",
    storageBucket: "educacao-70da8.appspot.com",
    messagingSenderId: "15641913879",
    appId: "1:15641913879:web:87848c81bd5173f8ca4a52",
    measurementId: "G-M8804F5XPB"
  };
  
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);