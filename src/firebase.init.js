// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
 
  apiKey: "AIzaSyCo-Xap6qjXHmzalDbmDQPSxEkRHeq0YA0",
  authDomain: "sp-menufecture.firebaseapp.com",
  projectId: "sp-menufecture",
  storageBucket: "sp-menufecture.appspot.com",
  messagingSenderId: "1083020136977",
  appId: "1:1083020136977:web:320fcb61764899609b97b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
 export default app;