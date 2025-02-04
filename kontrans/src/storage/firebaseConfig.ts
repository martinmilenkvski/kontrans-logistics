import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwJLLMKR6klTmf3GV4Kj0HpEEW2rbcJjM",
  authDomain: "kontrans-89668.firebaseapp.com",
  projectId: "kontrans-89668",
  storageBucket: "kontrans-89668.firebasestorage.app",
  messagingSenderId: "253142956028",
  appId: "1:253142956028:web:73b3a624c70a6b3c5ce479",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, getDocs, doc, getDoc };
