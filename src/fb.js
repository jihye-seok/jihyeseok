import * as firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyBI8SQDFh7dFdspji4w7iO4iGZA5oP-2Bk",
   authDomain: "kimbutter.firebaseapp.com",
   databaseURL: "https://kimbutter.firebaseio.com",
   projectId: "kimbutter",
   storageBucket: "kimbutter.appspot.com",
   messagingSenderId: "104401318892",
   appId: "1:104401318892:web:313d5db3bc16cd000446c9",
   measurementId: "G-RG5RGSP856"

}

 firebase.initializeApp(firebaseConfig);
 const auth = firebase.auth()

 export default auth
