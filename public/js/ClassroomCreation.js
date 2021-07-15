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
    measurementId: "G-MN57T4VBQL"
  };

var app = firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(async function(user){
    let UUID = firebase.auth().currentUser.uid
    document.getElementById("SubmitClass").addEventListener('click', function(){
        var CourseName = document.getElementById('CourseName')
        var CreatorOfCourse = document.getElementById('CreatorOfCourse')
        var Description = quill.root.innerHTML
        var PlannedStart = document.getElementById('PlannedStart')
        var PlannedEnd = document.getElementById('PlannedEnd')
        const SetCourseName = firebase.firestore().collection('Classes').doc(CourseName.value)
        const SetCourseSettings = firebase.firestore().collection('ClassID').doc(CourseName.value).set({
            ClassCreator: [CreatorOfCourse.value],
            Description: [Description],
            PlannedStart: [PlannedStart.value],
        })
        var Array = new Uint32Array(1);
        window.crypto.getRandomValues(Array);
        const SetCourseID = firebase.firestore().collection('ClassCodes').doc(CourseName.value).set({
            ClassUUID: [Array + "420"]
        })
        const SetCourseTeacher = firebase.firestore().collection('SignedUpClasses').doc(UUID).set({
            [CourseName.value]: "Teacher"
        }, {merge: true})
    })
})
