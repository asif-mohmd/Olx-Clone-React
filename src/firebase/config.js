import firebase from 'firebase'
import 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyD54xK2J3nIdzRRmwutj5Oj-1zzPJse9O8",
  authDomain: "olx-clone-4f7b0.firebaseapp.com",
  projectId: "olx-clone-4f7b0",
  storageBucket: "olx-clone-4f7b0.appspot.com",
  messagingSenderId: "383740099631",
  appId: "1:383740099631:web:f903cf30f1fd3eb3fb5ada",
  measurementId: "G-K2GDK0DERZ"
};

 export default firebase.initializeApp(firebaseConfig)