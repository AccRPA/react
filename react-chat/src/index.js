import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0fpE2X6mdpDSfU-wDPStLgZ9GqIwbXvY",
  authDomain: "chat-rooms-react.firebaseapp.com",
  projectId: "chat-rooms-react",
  storageBucket: "chat-rooms-react.appspot.com",
  messagingSenderId: "663437735817",
  appId: "1:663437735817:web:32215dff2feca10c8e5358"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
