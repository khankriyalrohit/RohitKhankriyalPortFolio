// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOMrFMuizX2-YbogDIVz_jcZF3HM1gCtg",
  authDomain: "rohitkhankriyalportfolio.firebaseapp.com",
  projectId: "rohitkhankriyalportfolio",
  storageBucket: "rohitkhankriyalportfolio.appspot.com",
  messagingSenderId: "654572657240",
  appId: "1:654572657240:web:1c13e967a18d95455b882d",
  measurementId: "G-SDX87DCLQB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
// npm install -g firebase-tools
// firebase login
// firebase init
// firebase deploy
  // https://firebasestorage.googleapis.com/v0/b/rohitkhankriyalportfolio.appspot.com/o/My%20Documents%2FRohit%20Khankriyal%20Resume.pdf?alt=media&token=7f90abf1-12e1-4e94-a8f7-340abbd8b2b8