import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFMpvYW8fx3dAx9O4updUgc4YRQ0k16Ic",
  authDomain: "second-project-6a046.firebaseapp.com",
  projectId: "second-project-6a046",
  databaseURL: "https://bezkoder-firebase.firebaseio.com",
  storageBucket: "second-project-6a046.appspot.com",
  messagingSenderId: "207753095525",
  appId: "1:207753095525:web:f8c0d9bad0cd07bdc6198c"
};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();