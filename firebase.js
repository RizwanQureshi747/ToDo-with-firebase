
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB92HCHaEPeGc_bsarqRM51NzZc4ktiwZk",
    authDomain: "myapp01-b588f.firebaseapp.com",
    projectId: "myapp01-b588f",
    storageBucket: "myapp01-b588f.appspot.com",
    messagingSenderId: "340243373940",
    appId: "1:340243373940:web:6d9f3b77a51b4f81669621"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db, collection, addDoc, getDocs, doc, deleteDoc, updateDoc }