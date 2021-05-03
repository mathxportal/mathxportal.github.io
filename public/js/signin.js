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
var sign = document.getElementById("signIn")
sign.addEventListener("click", signIn)

function signIn(event){
    event.preventDefault()
    console.log("Signed In")
    var email = document.getElementById("email")
    var password = document.getElementById("password")
    console.log(email.value, password.value)
    
    const promise = firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    promise.catch(e => alert(e.message))
    .then((userCredential) => {
        var user = userCredential.user;
        console.log(user)
        var UUIDUSER = firebase.auth().currentUser.uid
        console.log(UUIDUSER)
        location.href = `classroom.html?email=${email.value}&pass=${password.value}`;
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
}

