// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBg3xXzjfLzHzNbz4p4up5sxG4zAnABVeI",
  authDomain: "the-dragon-news-4b74f.firebaseapp.com",
  projectId: "the-dragon-news-4b74f",
  storageBucket: "the-dragon-news-4b74f.appspot.com",
  messagingSenderId: "767204733980",
  appId: "1:767204733980:web:966a2d9538e3589a441bd9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
