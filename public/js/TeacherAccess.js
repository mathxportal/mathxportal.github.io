var queryString = decodeURIComponent(window.location.search)
queryString = queryString.substring(1);
var queries = queryString.split("?");

firebase.auth().onAuthStateChanged(async function(user){
let UUID = firebase.auth().currentUser.uid

const classes = firebase.firestore().collection('SignedUpClasses').doc(UUID).get().then(function(doc) {
    var status = doc.data()[queries[1]]
    if(status == "Teacher"){
        console.log("You are a teacher")
        }
    })
})

//http://localhost:5000/class.html?Q53aw2jsITb7HFG8WALoynA4kO22?Urmom?Teacher