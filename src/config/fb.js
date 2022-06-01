
// import * as firebase from 'firebase';

// const firebaseConfig = {
//     apiKey: "AIzaSyDFuwDlOdtJcAr5w8pwBz9X_MhdoZhLu5M",
//    authDomain: "crsfinalproject.firebaseapp.com",
//    databaseURL: "https://crsfinalproject.firebaseio.com",
//    projectId: "crsfinalproject",
//    storageBucket: "crsfinalproject.appspot.com",
//    messagingSenderId: "1004918588546"
// };

// // Use this to initialize the firebase App
// const firebaseApp = firebase.initializeApp(firebaseConfig);

// // Use these for db & auth
// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { auth, db };

import * as firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDFuwDlOdtJcAr5w8pwBz9X_MhdoZhLu5M",
   authDomain: "crsfinalproject.firebaseapp.com",
   databaseURL: "https://crsfinalproject.firebaseio.com",
   projectId: "crsfinalproject",
   storageBucket: "crsfinalproject.appspot.com",
   messagingSenderId: "1004918588546"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };