import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_FIREBASE_API_KEY,
  authDomain: "resfolio-957ac.firebaseapp.com",
  projectId: "resfolio-957ac",
  storageBucket: "resfolio-957ac.appspot.com",
  messagingSenderId: "377279987228",
  appId: process.env.NEXT_FIREBASE_APP_ID,
  measurementId: "G-PRDRFKT1Q6",
};

const app = initializeApp(firebaseConfig);

export const dbFireStore = getFirestore(app);
export const storage = getStorage(app);

export const usersCollectionRef = collection(dbFireStore, "users");
export const resumesCollectionRef = collection(dbFireStore, "resumes");

export const auth = getAuth(app);
