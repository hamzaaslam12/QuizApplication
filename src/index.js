import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig;

firebaseConfig = {
  apiKey: "AIzaSyDq28lKHRtmbBW5JDrLhqeTPCVhfz2TydE",
  authDomain: "quizapplication-90385.firebaseapp.com",
  projectId: "quizapplication-90385",
  storageBucket: "quizapplication-90385.appspot.com",
  messagingSenderId: "77731998322",
  appId: "1:77731998322:web:9582e6f3b7c744ff6030eb",
  measurementId: "G-JB67NDRCD1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
