import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
	storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_SENDER_ID,
	appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};
const secondaryFirebaseConfig = {
	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
};


const secondaryApp = initializeApp(firebaseConfig)
export const secondaryAuth = getAuth(secondaryApp)
export const db2 = getFirestore(secondaryApp);