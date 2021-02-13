//jshint esversion:6
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1xAfJzeMf5-X9gteuHLNZ9LuNW38Qf8E",
  authDomain: "challenge-cd373.firebaseapp.com",
  projectId: "challenge-cd373",
  storageBucket: "challenge-cd373.appspot.com",
  messagingSenderId: "583815306648",
  appId: "1:583815306648:web:aedfc6d64f6f01f8e01fed",
  measurementId: "G-2Q7FXXNJBQ"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export{db,auth};