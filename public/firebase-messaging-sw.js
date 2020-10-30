// import firebase scripts inside service worker js script
importScripts('https://www.gstatic.com/firebasejs/7.24.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.24.0/firebase-messaging.js');
importScripts("https://www.gstatic.com/firebasejs/7.24.0/firebase-firestore.js");
// importScripts("https://www.gstatic.com/firebasejs/ui/4.6.1/firebase-ui-auth.js");
// importScripts("https://www.gstatic.com/firebasejs/ui/4.6.1/firebase-ui-auth.css");

 firebase.initializeApp({
    apiKey: "ur_apikey",
    authDomain: "ur_authdomain",
    databaseURL: "ur_databaseurl",
    projectId: "ur_projectid",
    storageBucket: "ur_bucket",
    messagingSenderId: "ur_id",
    appId: "ur_app_id",
    measurementId: "ur_id"
  
});

const messaging = firebase.messaging();
const db = firebase.firestore();