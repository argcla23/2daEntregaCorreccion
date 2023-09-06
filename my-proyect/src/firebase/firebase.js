// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzi_rjId6e7L7tWm7SpBHP1SNbqnbH4ZM",
  authDomain: "proyecto-coderreact.firebaseapp.com",
  projectId: "proyecto-coderreact",
  storageBucket: "proyecto-coderreact.appspot.com",
  messagingSenderId: "642405311430",
  appId: "1:642405311430:web:17b3078722d612f35248c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)