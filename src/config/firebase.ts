import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD3EvdYyCgNNQ95AbmdHIc4Yy6IQKaKZuA",
  authDomain: "social-media-3c3b4.firebaseapp.com",
  projectId: "social-media-3c3b4",
  storageBucket: "social-media-3c3b4.appspot.com",
  messagingSenderId: "1081690267711",
  appId: "1:1081690267711:web:36e64b806396bf7ef2588a",
  measurementId: "G-676976F2S1",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);