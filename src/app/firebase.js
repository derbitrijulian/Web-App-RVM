// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhOazRvnHMcuK_xEBiUKobu1u5sh5fHug",
  authDomain: "derr-rvm.firebaseapp.com",
  projectId: "derr-rvm",
  storageBucket: "derr-rvm.firebasestorage.app",
  messagingSenderId: "418524738597",
  appId: "1:418524738597:web:f5ea6e8b194559c8f27bcc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)