import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    // apiKey: process.env.REACT_APP_API_KEY,
    // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    // databaseURL: process.env.REACT_APP_DB,
    // projectId: process.env.REACT_APP_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_APP_ID
      apiKey: "AIzaSyCtLkQTk7xA5CiELfFW9jzFGaKbVmQAC98",
      authDomain: "letmeask-01-cc44f.firebaseapp.com",
      databaseURL: "https://letmeask-01-cc44f-default-rtdb.firebaseio.com",
      projectId: "letmeask-01-cc44f",
      storageBucket: "letmeask-01-cc44f.appspot.com",
      messagingSenderId: "728322300053",
      appId: "1:728322300053:web:6357f498a4413a8d8de39c"
  };

  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const database = firebase.database();

  export { firebase, auth, database }