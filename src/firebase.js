// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBs9tErx2E7DDXVX4lumvdp-YO98ru9zIo",
  authDomain: "sharpe-ai-task-6a553.firebaseapp.com",
  projectId: "sharpe-ai-task-6a553",
  storageBucket: "sharpe-ai-task-6a553.appspot.com",
  messagingSenderId: "848344974576",
  appId: "1:848344974576:web:726a8b972be74da63b6e35",
  measurementId: "G-75KX3E862W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);