import { initializeApp } from "firebase/app";
import {getAuth, connectAuthEmulator } from 'firebase/auth';
import {getFunctions,connectFunctionsEmulator} from 'firebase/functions';

const firebaseConfig ={
  apiKey: "AIzaSyBMabKnKnMa5qIYt4Un3aU59SIRXGVSjbc",
  authDomain: "hospital-management-d119e.firebaseapp.com",
  projectId: "hospital-management-d119e",
  storageBucket: "hospital-management-d119e.appspot.com",
  messagingSenderId: "347864910640",
  appId: "1:347864910640:web:dffa5f086805b124c696f5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
connectAuthEmulator(getAuth(), 'http://127.0.0.1:9099/');
connectFunctionsEmulator(getFunctions(), 'http://127.0.0.1:5001/');
export { auth, app }