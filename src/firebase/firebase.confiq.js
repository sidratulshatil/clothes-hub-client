// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCNuJrRrD96IPuylZeh65T_Y-bpshbxJFY",
    authDomain: "clothes-hub-1857b.firebaseapp.com",
    projectId: "clothes-hub-1857b",
    storageBucket: "clothes-hub-1857b.appspot.com",
    messagingSenderId: "906945066645",
    appId: "1:906945066645:web:5e39a3a98b6382b7480d9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app