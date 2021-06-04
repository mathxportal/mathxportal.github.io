const SubmitButton = document.getElementById("JoinClass")
const ClassArea = document.getElementById('ClassArea')
SubmitButton.addEventListener('click', function(event){
    event.preventDefault()
    if (ClassArea.style = "display: block"){
        ClassArea.style = "display: none"
    }
    if (ClassArea.style = "display: none"){
        ClassArea.style = "display: block"
    }
})


firebase.auth().onAuthStateChanged(async function(user) {
    firebase.firestore().collection('ClassCodes').doc("Poggy Woggy Class").get().then(function(doc) {
        console.log(doc.id, "=>", doc.data())
    })
    let UUID = firebase.auth().currentUser.uid
    const buttonForJoining = document.getElementById('JoinClassesbutton')

    buttonForJoining.addEventListener('click', function(event){
        event.preventDefault();
        const ClassName = document.getElementById('ClassName')
        const ClassID = document.getElementById('ClassID')
        if (firebase.firestore().collection('ClassCodes').doc(ClassName.value)) {
            console.log("1")
            console.log(ClassName.value)
            firebase.firestore().collection('ClassCodes').doc(ClassName.value).get().then(function(doc) {
                console.log(doc.id, " => ", doc.data())
                console.log("2")
                console.log(doc.data())
                for (var x in doc.data()) {
                    console.log(x)
                    console.log(doc.data()[x])
                    if (doc.data()[x] == ClassID.value) {
                        console.log("3")
                        const Join = firebase.firestore().collection("SignedUpClasses").doc(UUID).set({
                            [ClassName.value]: "Student"
                        }, { merge: true })
                    }
                }

            })
        }
    })
})
