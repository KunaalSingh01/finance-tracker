import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBG3qP7lSnTNrUG1t0Ik6imnrNUv4cgNIY",
  authDomain: "finance-tracker-ed3c5.firebaseapp.com",
  projectId: "finance-tracker-ed3c5",
  storageBucket: "finance-tracker-ed3c5.firebasestorage.app",
  messagingSenderId: "880209849029",
  appId: "1:880209849029:web:649aa6f7b376ea45a91eac",
  measurementId: "G-B22935T7XM"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };
