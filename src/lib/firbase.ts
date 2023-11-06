// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClJiXGg2mNpFkKbnmA9EZbhPA6UDqQRkE",
  authDomain: "assinment5.firebaseapp.com",
  projectId: "assinment5",
  storageBucket: "assinment5.appspot.com",
  messagingSenderId: "186787127191",
  appId: "1:186787127191:web:fdbdc74e271cdfd687eed2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);