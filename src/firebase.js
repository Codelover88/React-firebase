import * as firebase from 'firebase/app'
import 'firebase/messaging'
import 'firebase/firestore'


var firebaseConfig =
{

  apiKey: "ur_apikey",
  authDomain: "ur_authdomain",
  databaseURL: "ur_databaseurl",
  projectId: "ur_projectid",
  storageBucket: "ur_bucket",
  messagingSenderId: "ur_id",
  appId: "ur_app_id",
  measurementId: "ur_id"

}

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default firebase;
export {db}


// export {db};
