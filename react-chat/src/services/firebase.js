// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, 
    addDoc, 
    serverTimestamp, 
    onSnapshot,
    query,
    orderBy, } from 'firebase/firestore';


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

function getMessages(roomId, callback) {
    return onSnapshot(
        query(
            collection(db, 'chat-rooms', roomId, 'messages'),
            orderBy('timestamp', 'asc')
        ),
        (querySnapshot) => {
            const messages = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            callback(messages);
        }
    );
}

async function sendMessage(roomId, userName, text) {
    try {
        await addDoc(collection(db, 'chat-rooms', roomId, 'messages'), {
            user: userName,
            text: text.trim(),
            timestamp: serverTimestamp(),
        });
    } catch (error) {
        console.error(error);
    }
}

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);

export { firebase, sendMessage, getMessages };
