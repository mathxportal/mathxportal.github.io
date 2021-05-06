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

var queryString = decodeURIComponent(window.location.search)
queryString = queryString.substring(1);
var queries = queryString.split("?");
var ReplyText = document.getElementById("Respond")
let RespondersEmail = queries[3]


var OriginalMessage = document.getElementById("OgMessage")

const ContextMessage = `
<div><p>${queries[2]}</p></div>
<div><p>${queries[1]}</p></div>

`

function SubmitReply() {
    
}



OriginalMessage.innerHTML = ContextMessage
ReplyText.addEventListener("click", SubmitReply())
