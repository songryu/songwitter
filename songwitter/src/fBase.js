import * as firebase from "firebase/app";
import "firebase/auth";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
    };

// var firebaseConfig = { 
//     apiKey: "API_KEY",
//     authDomain: "PROJECT_ID.firebaseapp.com",
//     // The value of `databaseURL` depends on the location of the database
//     databaseURL: "https://DATABASE_NAME.firebaseio.com",
//     projectId: "PROJECT_ID",
//     storageBucket: "PROJECT_ID.appspot.com",
//     messagingSenderId: "SENDER_ID",
//     appId: "APP_ID",
//     // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
//     measurementId: "G-MEASUREMENT_ID",
//   };
const firebaseApp = initializeApp(firebaseConfig);
export const authService = getAuth(firebaseApp);
//auth 서비스 많이 호출할 것임. 서비스만 export 