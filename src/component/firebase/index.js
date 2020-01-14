import firebase from 'firebase/app';
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD6Ugm2IJW7wzQ9K7v-E8LuRbK0zxHa1qs",
    authDomain: "hr-outfits.firebaseapp.com",
    databaseURL: "https://hr-outfits.firebaseio.com",
    projectId: "hr-outfits",
    storageBucket: "hr-outfits.appspot.com",
    messagingSenderId: "12497989550",
    appId: "1:12497989550:web:959c81c6584fd31b1ae23f",
    measurementId: "G-MP1MR8VP10"
  };

  firebase.initializeApp(firebaseConfig);
  const FireStore = firebase.firestore();
  const Storage = firebase.storage();
  export {
    Storage, FireStore, firebase as default
  }