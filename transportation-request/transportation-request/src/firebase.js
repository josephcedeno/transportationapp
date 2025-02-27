// Import necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  // Import authentication
import { getFirestore, enableIndexedDbPersistence } from "firebase/firestore"; // Import Firestore and enableIndexedDbPersistence

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWE8twJ7R3Baef0dzLNf1uYqbjJBBD81o",
  authDomain: "transportation-request-app.firebaseapp.com",
  projectId: "transportation-request-app",
  storageBucket: "transportation-request-app.appspot.com",
  messagingSenderId: "33762947661",
  appId: "1:33762947661:web:dcb1cb14a08af58b316204",
  measurementId: "G-9QX9TX7QWE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);  // Initialize Firebase Authentication
const db = getFirestore(app); // Initialize Firestore

// Enable offline persistence for Firestore
enableIndexedDbPersistence(db)
  .catch((err) => {
    if (err.code === 'failed-precondition') {
      console.error("Persistence failed: Multiple tabs open");
    } else if (err.code === 'unimplemented') {
      console.error("Persistence is not available in this browser");
    }
  });

// Export auth and db so they can be used in other files
export { auth, db };
