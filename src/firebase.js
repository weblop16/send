import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDpnmlVxNpzE3EX_9Kb14MF6A-FHoJNmhk",
  authDomain: "grass-e1485.firebaseapp.com",
  projectId: "grass-e1485",
  storageBucket: "grass-e1485.firebasestorage.app",
  messagingSenderId: "282091265420",
  appId: "1:282091265420:web:93a7895eecfd96365dcaa9",
  measurementId: "G-KFM6273YYP"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };