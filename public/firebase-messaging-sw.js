importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
    apiKey:"AIzaSyDo5Cur-WMaSuwaMpYKj2ApFhiJ9k8BirY",
    authDomain: "pulzion-21.firebaseapp.com",
    projectId: "pulzion-21",
    storageBucket: "pulzion-21.appspot.com",
    messagingSenderId: "291337681434",
    appId: "1:291337681434:web:1e0a5d645306ecce046fa3",
    measurementId: "G-QYYSV67LY3"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
    console.log('Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle,
        notificationOptions);
});