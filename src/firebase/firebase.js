import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyBCzVU1SvEq8beSVzGMfajBfyOLOCJNZqk",
    authDomain: "dns-7019b.firebaseapp.com",
    projectId: "dns-7019b",
    storageBucket: "dns-7019b.appspot.com",
    messagingSenderId: "138991654025",
    appId: "1:138991654025:web:0516482894f265db51a258"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);

