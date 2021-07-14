var quill = new Quill("#editor-container", {
  modules: {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      ["image", "code-block"],
      ["link"],
      [{ script: "sub" }, { script: "super" }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["clean"],
    ],
  },
  placeholder: "Compose an epic...",
  theme: "snow", // or 'bubble'
});

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

var ClassName = document.getElementById("Classname");
var queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1);
console.log(queryString);

ClassName.innerText += " " + queryString;

firebase.auth().onAuthStateChanged(async function (user) {
  let UUID = firebase.auth().currentUser.uid;
  firebase
    .firestore()
    .collection("SignedUpClasses")
    .doc(UUID)
    .get()
    .then(function (doc) {
      let i = 0;
      for (var x in doc.data()) {
        if (x == queryString && doc.data()[x] == "Teacher") {
          i = 2;
        }
      }

      if (i > 1) {
        document
          .getElementById("SubmitAssignment")
          .addEventListener("click", function () {
            var Name = document.getElementById("AssignmentName").value;
            var Description = quill.container.innerHTML.split("<div class=\"ql-tooltip ql-hidden\" style=\"user-select: auto;\">")[0];
            var DueDate = document.getElementById("DueDate");
            console.log(Name + Description.value + DueDate.value);
            const AssignmentLink = firebase
              .firestore()
              .collection("ClassID")
              .doc(queryString)
              .collection("Assignments")
              .doc(Name)
              .set({
                assignmentName: [Name],
                assignmentDescription: [Description],
                dueDate: [DueDate.value],
              })
              .then(function () {
                location.replace("author-dashboard.html");
              });
          });
      } else {
        document
          .getElementById("SubmitAssignment")
          .addEventListener("click", function () {
            alert("You are not a teacher");
          });
      }
    });
});
