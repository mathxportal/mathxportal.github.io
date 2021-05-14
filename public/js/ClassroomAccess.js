const classroom = document.getElementById('class')
//const navclass = document.getElementById('navclass')

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
        <li class="list-group-item" style="z-index: initial;">
        <div class="d-flex align-items-center">
            <a href="#" class="mr-3">
                <img src="assets/images/logos/vuejs.svg" alt="course" class="">

            </a>
            <div class="flex">
                <a href="${queryString}" class="text-body"><strong>${x}</strong></a>
                <div class="d-flex align-items-center">
                </div>
            </div>
            <div class="dropdown ml-3">
                <a href="#" class="dropdown-toggle text-muted" data-caret="false" data-toggle="dropdown">
                    <i class="material-icons">more_vert</i>
                </a>
                <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item" href="#">View Stats</a>
                    <a class="dropdown-item" href="#">Proceed</a>
                    <a class="dropdown-item" href="#">Close</a>
                </div>
            </div>
        </div>
    </li>
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
    //navclass.innerHTML = navlist
    })
})