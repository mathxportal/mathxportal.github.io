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

var ClassName = document.getElementById("Classname")
var queryString = decodeURIComponent(window.location.search)
queryString = queryString.substring(1);
console.log(queryString)

ClassName.innerText += " " + queryString


firebase.auth().onAuthStateChanged(async function(user) {
    let UUID = firebase.auth().currentUser.uid
    firebase.firestore().collection("SignedUpClasses").doc(UUID).get().then(function(doc){
        let i = 0
        for (var x in doc.data()){
            if (x == queryString && doc.data()[x] == "Teacher") {
                i = 2
            }
        }

        if (i > 1) {
            document.getElementById('SubmitAssignment').addEventListener('click', function(){
                var Name = document.getElementById("AssignmentName").value
                var Description = document.getElementById('Description')
                var RemoveDiv = Description.innerHTML.split("<div class=\"ql-editor\" data-gramm=\"false\" contenteditable=\"true\" data-placeholder=\"Quill WYSIWYG editor\">")
                var RemoveDivfirst = RemoveDiv[1]
                var DivlessDescription = RemoveDivfirst.split("</div>")
                var FinalDescription = DivlessDescription[0]
                var DueDate = document.getElementById('DueDate')
                console.log(Name + FinalDescription.value + DueDate.value)
                const AssignmentLink = firebase.firestore().collection("ClassID").doc(queryString).collection("Assignments").doc(Name).set({
                    assignmentName: [Name],
                    assignmentDescription: [FinalDescription],
                    dueDate: [DueDate.value]
                }).then(function(){
                    location.replace("author-dashboard.html")
                })
            })
        }

        else {
            document.getElementById('SubmitAssignment').addEventListener('click', function(){
                alert("You are not a teacher")
            })
        }
    })
})
