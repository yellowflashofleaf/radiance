import firebase from 'firebase/app';
import 'firebase/messaging';
import axios from "axios";

var firebaseConfig = {
    apiKey: "AIzaSyDo5Cur-WMaSuwaMpYKj2ApFhiJ9k8BirY",
    authDomain: "pulzion-21.firebaseapp.com",
    projectId: "pulzion-21",
    storageBucket: "pulzion-21.appspot.com",
    messagingSenderId: "291337681434",
    appId: "1:291337681434:web:1e0a5d645306ecce046fa3",
    measurementId: "G-QYYSV67LY3"
};


firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

export const getToken = (setTokenFound) => {
    return messaging.getToken({vapidKey: process.env["REACT_APP_FCM_KEY"]}).then((currentToken) => {
        if (currentToken) {
            console.log('current token for client: ', currentToken);
            setTokenFound(true);
            axios.post(`${process.env.REACT_APP_API_URL}user/subscribe`, {token: currentToken}, {headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}})
                .then(res => {
                    console.log(res)
                })
            // Track the token -> client mapping, by sending to backend server
            // show on the UI that permission is secured
        } else {
            console.log('No registration token available. Request permission to generate one.');
            setTokenFound(false);
            // shows on the UI that permission is required
        }
    }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
        // catch error while creating client token
    });
}

export const onMessageListener = () =>
    new Promise((resolve) => {
        messaging.onMessage((payload) => {
            resolve(payload);
        });
    });