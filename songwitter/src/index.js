import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
//import { firebase } from './Firebase';
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";
// import "firebase/compat/storage";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   (React.StrictMode)
//   (App /)
//   (/React.StrictMode),
//   );
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
