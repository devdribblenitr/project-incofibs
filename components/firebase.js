import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDA7tBVyLG1nO4yttkUVoiMdJWf_h7L2Gk",
    authDomain: "incofibs-a001d.firebaseapp.com",
    projectId: "incofibs-a001d",
    storageBucket: "incofibs-a001d.appspot.com",
    messagingSenderId: "844538884513",
    appId: "1:844538884513:web:64fa4b60ddfed72c421be0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)