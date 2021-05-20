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

document.getElementById("SubmitClass").addEventListener('click', function(){
    var CourseName = document.getElementById('CourseName')
    var Description = document.getElementById('DescriptionOfCourse')
    var PlannedStart = document.getElementById('PlannedStart')
    var PlannedEnd = document.getElementById('PlannedEnd')
    const SetCourseName = firebase.firestore().collection('Classes').doc(CourseName.value)
    const SetCourseSettings = firebase.firestore().collection('ClassID').doc(CourseName.value).set({
        Description: [Description.innerHTML],
        PlannedStart: [PlannedStart.value],
    })
})
