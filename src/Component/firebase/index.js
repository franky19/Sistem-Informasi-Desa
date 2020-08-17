import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBr4BuX3pFw01d3QukztmqQIRQ3BpSZjkE",
    authDomain: "myapp-3dc6b.firebaseapp.com",
    databaseURL: "https://myapp-3dc6b.firebaseio.com",
    projectId: "myapp-3dc6b",
    storageBucket: "myapp-3dc6b.appspot.com",
    messagingSenderId: "556802511552",
    appId: "1:556802511552:web:ee91e1f31c4446024c9325",
    measurementId: "G-KR4WYXRB05"
  };

  firebase.initializeApp(firebaseConfig)

  const storage =firebase.storage();
  export{
      storage,firebase as default
  }