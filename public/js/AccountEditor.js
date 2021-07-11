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

const buttonforSaving = document.getElementById('SaveButton')

firebase.auth().onAuthStateChanged(async function(user) {
    let UUID = firebase.auth().currentUser.uid
    buttonforSaving.addEventListener('click', function(event){
        event.preventDefault();
        const firstname = document.getElementById('fname')
        const lastname = document.getElementById('lname')
        const Bio = document.getElementById('desc')

        console.log(Bio.value, firstname.value, lastname.value)
        

        firebase.firestore().collection("Users").doc("Profiles").collection(UUID).doc("Details").set({
            firstname: [firstname.value],
            lastname: [lastname.value],
            Bio: [Bio.value],
        })
    })
})