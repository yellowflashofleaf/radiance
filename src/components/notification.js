import React, {useEffect} from 'react';
import ReactNotification, {store} from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import {getToken, onMessageListener} from '../firebase';

function Notification() {

    useEffect(() => {
        getToken();
    }, [])

    onMessageListener().then(payload => {
        console.log(payload);
        store.addNotification({
            title: payload.notification.title,
            message: payload.notification.body,
            type: "info",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
                duration: 250000,
                onScreen: true
            }
        });
    }).catch(err => console.log('failed: ', err));


    return (
        <div onClick={() => console.log('this is notifications component')}>

            <ReactNotification/>

        </div>
    );
}

export default Notification;