import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDoVpMtVF6Jzxoe5q7x4WnKuBnyEI0yiSc",
    authDomain: "e-ride-1901f.firebaseapp.com",
    projectId: "e-ride-1901f",
    storageBucket: "e-ride-1901f.appspot.com",
    messagingSenderId: "71854121319",
    appId: "1:71854121319:web:d365c5fca43be2fadb4fc2"
  };





firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


