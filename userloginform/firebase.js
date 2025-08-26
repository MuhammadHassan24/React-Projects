// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCacRkwh1TC4PRwNc9uSBhk_jQN12NqIYE",
    authDomain: "reactauthapp-1c0e7.firebaseapp.com",
    projectId: "reactauthapp-1c0e7",
    storageBucket: "reactauthapp-1c0e7.firebasestorage.app",
    messagingSenderId: "484248063407",
    appId: "1:484248063407:web:9e9d3f2637a727cf2af35a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;