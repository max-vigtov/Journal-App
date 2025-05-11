// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { envs } from "../config";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: envs.APIKEY,
  authDomain: envs.AUTHDOMAIN,
  projectId: envs.PROJECTID,
  storageBucket: envs.STORAGEBUCKET,
  messagingSenderId: envs.MESSAGINGSENDERID,
  appId: envs.APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);