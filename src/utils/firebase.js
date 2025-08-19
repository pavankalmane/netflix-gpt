// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOqvW8zIXd9csA_deK6pT3Ka7Pu-Zo5Po",
  authDomain: "netflixgpt-85667.firebaseapp.com",
  projectId: "netflixgpt-85667",
  storageBucket: "netflixgpt-85667.firebasestorage.app",
  messagingSenderId: "833597380732",
  appId: "1:833597380732:web:ed4efe7ff66819061e51f9",
  measurementId: "G-0N9XZVKYRK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
