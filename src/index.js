import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyCGGWMrNGeOb4N020AeH5FfMDn9cVCLhqw",
    authDomain: "real-time-chat-6690f.firebaseapp.com",
    projectId: "real-time-chat-6690f",
    storageBucket: "real-time-chat-6690f.appspot.com",
    messagingSenderId: "370068063842",
    appId: "1:370068063842:web:deae36d0a8311c9df5733b"
});

export const Context = createContext(null)

const auth = firebase.auth();
const firestore = firebase.firestore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{auth, firestore, firebase}}>
        <App />
    </Context.Provider>
    
);
