import firebase from 'firebase/app';
import 'firebase/messaging';
import axios from "axios";
import {detect} from 'detect-browser'

var firebaseConfig = {
    apiKey: "AIzaSyDo5Cur-WMaSuwaMpYKj2ApFhiJ9k8BirY",
    authDomain: "pulzion-21.firebaseapp.com",
    projectId: "pulzion-21",
    storageBucket: "pulzion-21.appspot.com",
    messagingSenderId: "291337681434",
    appId: "1:291337681434:web:1e0a5d645306ecce046fa3",
    measurementId: "G-QYYSV67LY3"
};
let messaging = {}
const browser = detect();

if (browser && browser.name === 'chrome') {
    firebase.initializeApp(firebaseConfig);
    messaging = firebase.messaging();
}
export const onMessageListener = () => {
    if (messaging !== {}) {

        new Promise((resolve) => {
                messaging.onMessage((payload) => {
                    resolve(payload);
                });

            }
        )
    }
}


export const getToken = () => {
    if (messaging !== {}) {
        console.log(messaging, "dasdad")
        return messaging.getToken({vapidKey: process.env["REACT_APP_FCM_KEY"]}).then((currentToken) => {
            if (currentToken) {
                console.log('current token for client: ', currentToken);
                axios.post(`${process.env.REACT_APP_API_URL}user/subscribe`, {token: currentToken}, {headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}})
                    .then(res => {
                        console.log(res)
                    })
                // Track the token -> client mapping, by sending to backend server
                // show on the UI that permission is secured
            } else {
                console.log('No registration token available. Request permission to generate one.');
                // shows on the UI that permission is required
            }
        }).catch((err) => {
            console.log('An error occurred while retrieving token. ', err);
            // catch error while creating client token

        });
    }
}



