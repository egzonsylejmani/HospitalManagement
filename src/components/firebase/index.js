import { initializeApp } from "firebase/app";
import {getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCUsbPsDB90w1XRZLhxF99DyLm35oq8NEA",
  authDomain: "vue-hospital-95225.firebaseapp.com",
  projectId: "vue-hospital-95225",
  storageBucket: "vue-hospital-95225.appspot.com",
  messagingSenderId: "222373345611",
  appId: "1:222373345611:web:931ce79256c000374a90ce"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }