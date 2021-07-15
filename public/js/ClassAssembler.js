const Description = document.getElementById("Description");
const Title = document.getElementById("Title");
const Teacher = document.getElementById("TeacherName");
const AssignmentDiv = document.getElementById("AssignDiv");

var firebaseConfig = {
  apiKey: "AIzaSyBTxAFBtZV3plHViPvJORHxs3YF2uOuPkI",
  authDomain: "mathxportal.firebaseapp.com",
  databaseURL: "https://mathxportal-default-rtdb.firebaseio.com",
  projectId: "mathxportal",
  storageBucket: "mathxportal.appspot.com",
  messagingSenderId: "438926262255",
  appId: "1:438926262255:web:08ab5e434d53a90b6c001a",
  measurementId: "G-MN57T4VBQL",
};

var app = firebase.initializeApp(firebaseConfig);

var queryString = decodeURIComponent(window.location.search);
console.log(queryString);
queryString = queryString.substring(1);
console.log(queryString);
var queries = queryString.split("?");

const Assemble = firebase
  .firestore()
  .collection("ClassID")
  .doc(queries[1])
  .get()
  .then(function (doc) {
    Title.innerHTML = queries[1];

    for (var y in doc.data()) {
      // doc.data()[y] is what is contained, y is the name of the variable
      // Markdown but Sam does it
      if (y == "Description") {
        Description.innerHTML = doc.data()[y];
      }
      if (y == "ClassCreator") {
        console.log("Help");
        Teacher.innerHTML = doc.data()[y];
      }
    }
  });

firebase.auth().onAuthStateChanged(async function (user) {
  let UUID = firebase.auth().currentUser.uid;
  firebase.firestore().collection("ClassCodes").doc(queries[1]).get().then(function(doc){
    var ClassCODE = document.getElementById("ClassCodes")
    for(var y in doc.data()){
        ClassCODE.innerHTML = "Class Name: " + queries[1] + "<br>Class ID: " + doc.data()[y]
    }
    
    console.log("Test")
})

  firebase
    .firestore()
    .collection("SignedUpClasses")
    .doc(UUID)
    .get()
    .then(function (doc) {
      let i = 0;
      for (var x in doc.data()) {
        if (x == queries[1] && doc.data()[x] == "Teacher") {
          i = 2;
        }
      }

      if (i > 1) {
        let li = `
            <a id="CreateAssignment" style="cursor: pointer;">Create Assignment</a>
            <div class="ml-auto">
            </div>
            `;
        AssignmentDiv.innerHTML = li;

        const CreateAssignment = document.getElementById("CreateAssignment");
        CreateAssignment.addEventListener("click", function () {
          var ref = "new-assignment.html?" + queries[1];
          location.replace(ref);
        });
      }

      firebase
        .firestore()
        .collection("ClassID")
        .doc(queries[1])
        .collection("Assignments")
        .get()
        .then((querySnapshot) => {
          let ClassesList = "";
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            for (var w in doc.data()) {
              if (w == "assignmentName") {
                var AssignmentName = doc.data()[w];
                console.log(AssignmentName);
              } else if (w == "dueDate") {
                var DueDate = doc.data()[w];
                console.log(DueDate);
              }
            }
            var QueriesLink = queries[1];

            var QString =
              "assignment.html" +
              "?" +
              QueriesLink +
              "?" +
              AssignmentName +
              "?" +
              DueDate;

            ClassesList += `
                <li class="list-group-item d-flex">
                <a href="${QString}">${AssignmentName}</a>
                <div class="ml-auto d-flex align-items-center">
                    <span class="text-muted"><i class="material-icons icon-16pt icon-light">date_range</i>${DueDate}</span>
                </div>
                </li>`;
          });
          var AllAssignments = document.getElementById("ListofAssignments");
          AllAssignments.innerHTML = ClassesList;
        });
    });


});
