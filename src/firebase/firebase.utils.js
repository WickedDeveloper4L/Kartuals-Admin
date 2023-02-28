import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "kartualsadmin.firebaseapp.com",
  projectId: "kartualsadmin",
  storageBucket: "kartualsadmin.appspot.com",
  messagingSenderId: "564864161096",
  appId: "1:564864161096:web:6d68311863f62747248f7d",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth();
