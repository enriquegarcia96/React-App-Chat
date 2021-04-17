import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



// Your web app's Firebase configuration
const  firebaseConfig = {
    apiKey: "AIzaSyAhwVPTAFxym9NO9RB2fN0Fs9RrmMattwA",
    authDomain: "react-app-chat-c44f6.firebaseapp.com",
    databaseURL: "https://react-app-chat-c44f6-default-rtdb.firebaseio.com",
    projectId: "react-app-chat-c44f6",
    storageBucket: "react-app-chat-c44f6.appspot.com",
    messagingSenderId: "583141982119",
    appId: "1:583141982119:web:81a1c94041253ac1a2c082"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export {
    db,
    auth,
    provider
}

