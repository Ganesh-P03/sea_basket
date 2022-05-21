import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAfA7GExeNOMxXxSIK_1xQGcwlDCO3yh9g",
  authDomain: "sea-basket-9c19f.firebaseapp.com",
  projectId: "sea-basket-9c19f",
  storageBucket: "sea-basket-9c19f.appspot.com",
  messagingSenderId: "610537812682",
  appId: "1:610537812682:web:d571084acc3de47560fa33",
  measurementId: "G-1Q35Q8SZZP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
