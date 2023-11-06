// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyBLRgT89Je6o4qLM7PJj0IqqKTeKXA0oeU",
  authDomain: "omor-academy.firebaseapp.com",
  projectId: "omor-academy",
  storageBucket: "omor-academy.appspot.com",
  messagingSenderId: "143617089314",
  appId: "1:143617089314:web:32099944e7c2ffa20c0f7b"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

export const auth = getAuth();