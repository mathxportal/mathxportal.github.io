const classroom = document.getElementById('class')
const navclass = document.getElementById('navclass')

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

const setupUI = (user) => {}

firebase.auth().onAuthStateChanged(async function(user){
    let UUID = firebase.auth().currentUser.uid
  
const classes = firebase.firestore().collection('SignedUpClasses').doc(UUID).get().then(function(doc) {
    console.log(doc.id, " => ", doc.data())
    var x;
    let classlist = '';
    let navlist = '';
    for (x in doc.data()) {
        var queryString = "class.html" + "?" + UUID + "?" + x + "?" + doc.data()[x];
        const li = `
        <div style="border: 4px solid #0a84ff; background-color: #0a84ff; border-style: ridge; border-length: 20px; padding:10px; padding-bottom:20px; display: inline-grid; width: 31.2%; text-align: center; ">
            <div >
                <h2 style="color:#ffffff; padding-bottom: 20px; text-align: center;">${x}</h2>
                <h3 style="color:#ffffff; text-align: center;">${doc.data()[x]}</h3>
                <div style="text-align:center;"><button><a href="${queryString}"> Go To Class </a></button></div>
            </div>
        </div>
        `;
        const nav = `
        <a href="${queryString}">${x}</a>
        `
        classlist += li;
        navlist += nav;
        console.log(x)
        console.log(doc.data()[x])
    }
    classroom.innerHTML = classlist
    navclass.innerHTML = navlist
    })
})