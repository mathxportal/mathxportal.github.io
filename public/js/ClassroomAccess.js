const classroom = document.getElementById('class')

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
        let html = '';
        for (x in doc.data()) {
            const li = `
            <li>
                <div>${x}</div>
                
                <div>${doc.data()[x]}</div>
            </li>
            `;
            html += li;

            console.log(x)
            console.log(doc.data()[x])
        }
        classroom.innerHTML = html
    })
  })