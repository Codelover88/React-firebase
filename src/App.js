import React,{useEffect} from 'react'//{Component} - for class
import firebase from './firebase'
import 'firebase/messaging'


//  if it is class then use componentdidmount and if it is function use useeffect

export default function App(){
    
    useEffect(() => {
        const messaging = firebase.messaging()
        Notification.requestPermission()
            .then((token) => {
                return messaging.getToken()
            }).then(token => {
                console.log("Token: ", token)
            }).catch(() => {
                console.log('error');
            })
    }, [])
   

    return(
        <div>

        </div>
    );
}