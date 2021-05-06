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

var SettingsForm = document.getElementById("SettingsForm")

var queryString = decodeURIComponent(window.location.search)
queryString = queryString.substring(1);
var queries = queryString.split("?");

const Settings = firebase.firestore().collection('ClassSettings').doc(queries[1]).get().then(function(doc) {
    console.log("we got here")
    var x
        for (x in doc.data()){
            const li = `
            <h2> ${[x]} </h2>
            <select> 
            ${x}
            <option>True</option>
            <option>False</option>
            </select>
            `
            SettingsForm.innerHTML += li
    }
})