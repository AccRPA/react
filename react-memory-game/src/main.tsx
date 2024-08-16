import React from 'react'
import ReactDOM from 'react-dom/client'
import RoutesApp from './components/Routes.tsx';
import { ThemeProvider } from '@mui/material';
import { GameTheme } from './theme/GameTheme.ts';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-HNxLm4Hu2BdRA7PmVukuR5-kIcFS5XA",
  authDomain: "memory-card-game-react.firebaseapp.com",
  projectId: "memory-card-game-react",
  storageBucket: "memory-card-game-react.appspot.com",
  messagingSenderId: "48514024921",
  appId: "1:48514024921:web:9e15543a50ce364f8a45c8"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={GameTheme}>
      <RoutesApp />
    </ThemeProvider>
  </React.StrictMode>,
);