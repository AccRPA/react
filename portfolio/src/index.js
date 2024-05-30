import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDK_ZnbLbgUd1MBnheMoIQ4Y_YalNsPfpo",
  authDomain: "jose-dev-portfolio.firebaseapp.com",
  projectId: "jose-dev-portfolio",
  storageBucket: "jose-dev-portfolio.appspot.com",
  messagingSenderId: "698516757091",
  appId: "1:698516757091:web:0ce0227d1f98e027f1f656"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
