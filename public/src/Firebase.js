// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkp4KzVlKcEXFqVVgn41paEoA4lEX0vTA",
  authDomain: "diandra-codelabs.firebaseapp.com",
  projectId: "diandra-codelabs",
  storageBucket: "diandra-codelabs.appspot.com",
  messagingSenderId: "58601336490",
  appId: "1:58601336490:web:60dcd3f049a2ebdd0aead3",
  measurementId: "G-2H7ELMT9BY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
