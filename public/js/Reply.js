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
var ReplyMessagesDisplay = document.getElementById("ReplyMessagesDisplay")
var app = firebase.initializeApp(firebaseConfig);
var replying = document.getElementById("Replying")
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

const ShowReplies = firebase.firestore().collection('Replies').doc(queries[0]).get().then(function(doc) {
    console.log(doc.id, " => ", doc.data())
    var x;
    let ReplyMessages = '';
    var MessagesArray = [];
    for (x in doc.data()) {
  
      MessagesArray.push(x)
      
    }
    MessagesArray.sort()
      console.log(MessagesArray.reverse())
      var y;
      for (y in MessagesArray) {
        console.log(MessagesArray[y])
        var Text = MessagesArray[y].split('?')
        const li = `
        <div>
          <p>${Text[0]}</p>
          <p>${Text[1]}</p>
        </div>
        `
        ReplyMessages += li;
    }
    ReplyMessagesDisplay.innerHTML = ReplyMessages
    


})

ReplyText.addEventListener("click", SubmitReply)

function SubmitReply(event) {
    console.log(replying.value)
    //event.preventDefault()
    var today = new Date();
    var Array = new Uint32Array(1);
    window.crypto.getRandomValues(Array);
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var SubmissionID = date + ' ' + time +  ' ' + RespondersEmail;
    var userRef = firebase.firestore().collection('Replies').doc(queries[0])
  
    userRef.set({
      [SubmissionID + '?' + replying.value + '?' + Array]: replying.value,
    }, {merge: true})
    setTimeout(function(){
        document.location.reload()
    }, 2000)
  }



OriginalMessage.innerHTML = ContextMessage
