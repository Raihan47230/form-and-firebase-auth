// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvWWzT1Ncg4msLQP43qrFv5y65Qc7kSAg",
  authDomain: "firebace-1e99c.firebaseapp.com",
  projectId: "firebace-1e99c",
  storageBucket: "firebace-1e99c.firebasestorage.app",
  messagingSenderId: "636808578891",
  appId: "1:636808578891:web:65ce2ad9f24b4019534ace"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
