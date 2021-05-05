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

var queryString = decodeURIComponent(window.location.search)
const classStream = document.getElementById('classMessages')

var Submit = document.getElementById("Submission")
Submit.addEventListener("click", SubmitStream)



var TextSubmission = document.getElementById("TextSubmission")
TextSubmission.addEventListener("click", UnhideSubmit)

var app = firebase.initializeApp(firebaseConfig);

console.log(queryString)
queryString = queryString.substring(1);
console.log(queryString)
var queries = queryString.split("?");
// for (var i = 0; i < queries.length; i++)
// {
//   console.log(queries[i])
// }
//TODO


function SubmitStream(event) {
  event.preventDefault()
  var useremail = firebase.auth().currentUser.email
  var today = new Date();
  var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var SubmissionID = useremail + ' ' + date + ' ' + time;
  var userRef = firebase.firestore().collection('Classes').doc(queries[1])

  userRef.set({
    [SubmissionID]: TextSubmission.value,
  }, {merge: true})
}

function UnhideSubmit(event){
  Submit.style.display="block";
}

const Stream = firebase.firestore().collection('Classes').doc(queries[1]).get().then(function(doc) {
  console.log(doc.id, " => ", doc.data())
  var x;
  let StreamMessages = '';
  for (x in doc.data()) {
    const li = `
    <div>
      <h3>${x}</h3>
      <h3>${doc.data()[x]}
    </div>
    `
    StreamMessages += li;
  }

  classStream.innerHTML = StreamMessages

})