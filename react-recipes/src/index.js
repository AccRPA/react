import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './index.css';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyA3e9s4lnEsKQveaysfKRkZF-uvKkskNFo",
    authDomain: "recipes-lookup.firebaseapp.com",
    projectId: "recipes-lookup",
    storageBucket: "recipes-lookup.appspot.com",
    messagingSenderId: "1001400776730",
    appId: "1:1001400776730:web:9f624bde439f6ccd4b39a3"
};
initializeApp(firebaseConfig);

ReactDOM.render(<App></App>, document.getElementById('root'));