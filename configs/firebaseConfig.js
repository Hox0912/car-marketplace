// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "car-marketplace-6cba2.firebaseapp.com",
  projectId: "car-marketplace-6cba2",
  storageBucket: "car-marketplace-6cba2.firebasestorage.app",
  messagingSenderId: "414876108227",
  appId: "1:414876108227:web:83da9af784d5f1dca32976",
  measurementId: "G-ZH5R36YBQT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app);