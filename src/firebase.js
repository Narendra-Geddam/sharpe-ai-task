// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8gpInstleNWMnFtRk8UxD1cVfGYaazNE",
  authDomain: "sharpe-ai-task-ed2dc.firebaseapp.com",
  projectId: "sharpe-ai-task-ed2dc",
  storageBucket: "sharpe-ai-task-ed2dc.appspot.com",
  messagingSenderId: "333787521871",
  appId: "1:333787521871:web:e61924539f105a4f8d5b3a",
  measurementId: "G-9D1KCBCVLZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

export default db;