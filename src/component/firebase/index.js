import Firebase from 'react-firebase';
import { connect } from 'react-firebase'

import "firebase/storage";

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

  Firebase.initializeApp(firebaseConfig);
  
  const Storage = Firebase.storage();
  export {
    Storage, Firebase as default
  }