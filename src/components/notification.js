import React, {useState} from 'react';
import ReactNotification, {store} from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import {onMessageListener, getToken} from '../firebase';

function Notification(props) {
    const [state, setState] = useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });

    const {vertical, horizontal, open} = state;

    const [show, setShow] = useState(false);
    const [notification, setNotification] = useState({title: '', body: ''});
    const [isTokenFound, setTokenFound] = useState(false);

    getToken(setTokenFound);

    const handleClose = () => {
        setShow(false)
    };

    onMessageListener().then(payload => {
        setShow(true);
        setNotification({title: payload.notification.title, body: payload.notification.body})
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