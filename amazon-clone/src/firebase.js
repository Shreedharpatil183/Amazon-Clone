import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyDUIcQHDG807ONCzMXSovGHBnUSVGSSmD8",
    authDomain: "clone-39654.firebaseapp.com",
    databaseURL: "https://clone-39654.firebaseio.com",
    projectId: "clone-39654",
    storageBucket: "clone-39654.appspot.com",
    messagingSenderId: "1035204709557",
    appId: "1:1035204709557:web:f9fdff9f3700b80cf782fc",
    measurementId: "G-VCFQSX4PDL"
    

})


const db = firebaseApp.firestore()
const auth = firebase.auth()


export { db, auth  }