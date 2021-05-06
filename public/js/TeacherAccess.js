var queryString = decodeURIComponent(window.location.search)
queryString = queryString.substring(1);
var queries = queryString.split("?");

var StaffButton = document.getElementById("Staff")



firebase.auth().onAuthStateChanged(async function(user){
    let UUID = firebase.auth().currentUser.uid

    const classes = firebase.firestore().collection('SignedUpClasses').doc(UUID).get().then(function(doc) {
        var status = doc.data()[queries[1]]
        var queryString = "TeacherSettings.html" + "?" + UUID + "?" + queries[1];
        if(status == "Teacher"){
            const li = `
            <div>
                <button id="SettingsforStaff"> 
                    <a href="${queryString}">
                        Staff Settings
                    </a>
                </button>
            </div>
        `
        
        StaffButton.innerHTML += li
        
        }
    })
})

//http://localhost:5000/class.html?Q53aw2jsITb7HFG8WALoynA4kO22?Urmom?Teacher