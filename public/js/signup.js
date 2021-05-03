var firebaseConfig = {
    apiKey: "AIzaSyBTxAFBtZV3plHViPvJORHxs3YF2uOuPkI",
    authDomain: "mathxportal.firebaseapp.com",
    databaseURL: "https://mathxportal-default-rtdb.firebaseio.com",
    projectId: "mathxportal",
    storageBucket: "mathxportal.appspot.com",
    messagingSenderId: "438926262255",
    appId: "1:438926262255:web:08ab5e434d53a90b6c001a",
    measurementId: "G-MN57T4VBQL"
  };

var app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()
var sign = document.getElementById("signUp")
sign.addEventListener("click", signUp)

function signUp(event){
    event.preventDefault()
    console.log("Signed up")
    var email = document.getElementById("email")
    var password = document.getElementById("password")
    console.log(email.value, password.value)
    
    

    const promise = firebase.auth().createUserWithEmailAndPassword(email.value, password.value)

    var UUID = firebase.auth().currentUser.uid
    var userRef = firebase.firestore().collection('SignedUpClasses').doc(UUID)
    
    userRef.set({
      General: "Student",
    }, {merge: true})

    promise.catch(e => alert(e.message))

}