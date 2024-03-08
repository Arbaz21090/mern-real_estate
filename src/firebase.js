import { initializeApp } from "firebase/app";

// Import the functions you need from the SDKs you need


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-l   ibraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-3db33.firebaseapp.com",
  projectId: "mern-estate-3db33",
  storageBucket: "mern-estate-3db33.appspot.com",
  messagingSenderId: "539371426444",
  appId: "1:539371426444:web:ebfda145bb46336e70e1a9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);