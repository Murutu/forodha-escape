import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAY2PO1RF5dN2C_xfzg4Ykr75IECK4Qeio",
  authDomain: "forodha-escape.firebaseapp.com",
  projectId: "forodha-escape",
  storageBucket: "forodha-escape.appspot.com",
  messagingSenderId: "483624721764",
  appId: "1:483624721764:web:c97559ef3c410aeecd2e71",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
