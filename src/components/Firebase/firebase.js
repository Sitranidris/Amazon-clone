// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDn7J8r-8O4Pg9HGzZ16P_rrEeL2WvK5Ww",
  authDomain: "clone-2288f.firebaseapp.com",
  projectId: "clone-2288f",
  storageBucket: "clone-2288f.appspot.com",
  messagingSenderId: "317034213403",
  appId: "1:317034213403:web:add20363708977897008be",
  measurementId: "G-CJLRRZFBTH"
};
// const firebaseConfig = {
//   apiKey: "AIzaSyA5d9C5837aut3JMKfHpqsgVuvqDC2rzuM",
//   authDomain: "marketing-world-wide-website.firebaseapp.com",
//   projectId: "marketing-world-wide-website",
//   storageBucket: "marketing-world-wide-website.appspot.com",
//   messagingSenderId: "1067677933714",
//   appId: "1:1067677933714:web:e7cdd47abe325aebd4c64b",
//   measurementId: "G-W80JFZ2Z59"
// };

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// const auth = firebase.auth();
const db = app.firestore();
const auth = getAuth(app);

export { auth , db };

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// // import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDn7J8r-8O4Pg9HGzZ16P_rrEeL2WvK5Ww",
//   authDomain: "clone-2288f.firebaseapp.com",
//   projectId: "clone-2288f",
//   storageBucket: "clone-2288f.appspot.com",
//   messagingSenderId: "317034213403",
//   appId: "1:317034213403:web:add20363708977897008be",
//   measurementId: "G-CJLRRZFBTH"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// export { auth };