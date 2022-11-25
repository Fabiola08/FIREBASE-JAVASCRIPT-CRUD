  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  import { getFirestore, collection, addDoc, getDocs, onSnapshot } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCLZQiA7j55-R6-mz6Ct9HXFqTPqh46_rw",
    authDomain: "fir-javascript-crud-24bf6.firebaseapp.com",
    projectId: "fir-javascript-crud-24bf6",
    storageBucket: "fir-javascript-crud-24bf6.appspot.com",
    messagingSenderId: "528358353940",
    appId: "1:528358353940:web:e0e933f7f3cdf3581a8b01"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getFirestore()

  export const saveTask=(title,description)=>
    addDoc(collection(db, 'tasks'), {title, description});

    export const getTasks = ()=> getDocs(collection (db, 'tasks'))

    export const onGetTasks = (callback) => onSnapshot(collection(db, 'tasks'), callback)

    
    
