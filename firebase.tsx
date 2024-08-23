// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXaSHLv1BY1VXjHiECbw1oxKsFZeZO_zM",
  authDomain: "langaiflashcard.firebaseapp.com",
  projectId: "langaiflashcard",
  storageBucket: "langaiflashcard.appspot.com",
  messagingSenderId: "116065860334",
  appId: "1:116065860334:web:412e30ddffab355a1991ff",
  measurementId: "G-2NEWR9T1DR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
