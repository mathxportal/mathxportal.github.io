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

const buttonforSubmitting = document.getElementById('buttonforSubmitting')
const NameOfAssigment = document.getElementById('NameOfAssignment')
const DueDate = document.getElementById('DueDate')
const Description = document.getElementById('AssigmentDescription')

var queryString = decodeURIComponent(window.location.search)
queryString = queryString.substring(1);
var queries = queryString.split("?");

NameOfAssigment.innerHTML = queries[1]
DueDate.innerHTML = "Due: " + queries[2]


firebase.auth().onAuthStateChanged(async function(user) {
    let UUID = firebase.auth().currentUser.uid
    firebase.firestore().collection("ClassID").doc(queries[0]).collection("Assignments").doc(queries[1]).get().then(function(doc){
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                for (var w in doc.data()){
                
                    if (w == "assignmentDescription"){
                        Description.innerHTML = doc.data()[w]
            }
        }
    })
    buttonforSubmitting.addEventListener('click', function(event){
        const CommentsToTeacher = document.getElementById('CommentsToTeacher')
        var RemoveDiv = CommentsToTeacher.innerHTML.split("<div class=\"ql-editor\" data-gramm=\"false\" data-placeholder=\"Quill WYSIWYG editor\" spellcheck=\"false\" contenteditable=\"true\">")
        console.log(RemoveDiv)
        var RemoveDivfirst = RemoveDiv[1]
        console.log(RemoveDiv[1])
        var DivlessDescription = RemoveDivfirst.split("</div>")
        var FinalDescription = DivlessDescription[0]

        event.preventDefault();
        var Array = new Uint32Array(1)
        window.crypto.getRandomValues(Array);

        const SubmitComments = firebase.firestore().collection("ClassID").doc(queries[0]).collection("Assignments").doc(queries[1]).collection("SubmittedWork").doc(UUID).set({
            SubmissionID: [Array + "410"],
            CommentsToTeacher: [FinalDescription]
        })
        
    })

})