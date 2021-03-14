import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCa3GW_eKIyLh0DoyquQwMtO6FojETjMtY",
    authDomain: "twitter-clone-dc70c.firebaseapp.com",
    projectId: "twitter-clone-dc70c",
    storageBucket: "twitter-clone-dc70c.appspot.com",
    messagingSenderId: "410277603112",
    appId: "1:410277603112:web:9f03578b63f8a4147a521d",
    measurementId: "G-5NLEDC1NCC"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export default db