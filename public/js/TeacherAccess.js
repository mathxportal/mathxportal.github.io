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
            <style>
            @import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');
            .button-center {
                margin: auto;
                width: 100%;
                background-color: #65279c;
                padding-bottom: 10px;
                padding-top: 40px;

              }
              a {
                color: #141714;
                font-family: Itim;
                font-size: 24px;
              }
            </style>           
            <div>
                <button id="SettingsforStaff" class="button-center"> 
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