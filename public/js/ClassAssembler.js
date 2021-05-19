const Description = document.getElementById('Description')
const Title = document.getElementById('Title')


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

var queryString = decodeURIComponent(window.location.search)
console.log(queryString)
queryString = queryString.substring(1);
console.log(queryString)
var queries = queryString.split("?");



const Assemble = firebase.firestore().collection('ClassID').doc(queries[1]).get().then(function(doc) {

    Title.innerHTML = queries[1]

    for (var y in doc.data()){
            // doc.data()[y] is what is contained, y is the name of the variable
            // Markdown but Sam does it
        if (y == "Description") {
            var othertext = doc.data()[y].split("***")
            var w = ''
            var Desvalue = ''
            var bolded = ''
    
            for (w in othertext) {
                if (w % 2 != 0) {
                    bolded += `<b>${othertext[w]}</b>`
                }
            
                else {
                    bolded += othertext[w]
                }
            }

            
            console.log(bolded)
            var othertext = bolded.split("~~~")
            var italic = ''
            var w2 = ''

            for (w2 in othertext) {
                if (w2 % 2 != 0) {
                    italic += `<i>${othertext[w2]}</i>`
                }

                else {
                    italic += othertext[w2]
                }
            }
            console.log(italic)
            Description.innerHTML = italic
        }


console.log(Desvalue)
    
    }
})
