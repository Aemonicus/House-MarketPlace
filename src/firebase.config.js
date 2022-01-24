import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPIqcY8e_CK2H7GSAMwVKnZruAJI9bm7o",
  authDomain: "house-market-place-44ec6.firebaseapp.com",
  projectId: "house-market-place-44ec6",
  storageBucket: "house-market-place-44ec6.appspot.com",
  messagingSenderId: "669136207362",
  appId: "1:669136207362:web:2640cfa50d47aa2635311b"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore()