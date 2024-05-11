import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLO6hKYuguGISrX-GRT77XsQrCm-im370",
  authDomain: "simple-note-keeper.firebaseapp.com",
  projectId: "simple-note-keeper",
  storageBucket: "simple-note-keeper.appspot.com",
  messagingSenderId: "471859818321",
  appId: "1:471859818321:web:89698d759b73146f5bed70"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
