import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCKf64wzK4R_MGppUq8j5OadYpu_5Eklu4",
    authDomain: "disney-plushotstar.firebaseapp.com",
    projectId: "disney-plushotstar",
    storageBucket: "disney-plushotstar.appspot.com",
    messagingSenderId: "902768247334",
    appId: "1:902768247334:web:be39d233513a42f8531ce7",
    measurementId: "G-EP448VKE47"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
