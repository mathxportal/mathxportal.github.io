// Markdown but Sam does it
text = "Hi there *Whats good* my fam dogs! Hope your *feeling* pretty hip!"

var othertext = text.split("*")
var x = ''
var li = ''

for (x in othertext) {
    if (x % 2 != 0) {
        li += `<h3>${othertext[x]}</h3>`
    }
    
    else {
        li += othertext[x]
    }
}
console.log(li)

// if (y == "Description") {
//     var othertext = doc.data()[y].split("***")
//     var w = ''
//     var Desvalue = ''
//     var bolded = ''

//     for (w in othertext) {
//         if (w % 2 != 0) {
//             bolded += `<b>${othertext[w]}</b>`
//         }
    
//         else {
//             bolded += othertext[w]
//         }
//     }

//     var othertext = bolded.split("~~~")
//     var italic = ''
//     var w2 = ''

//     for (w2 in othertext) {
//         if (w2 % 2 != 0) {
//             italic += `<i>${othertext[w2]}</i>`
//         }

//         else {
//             italic += othertext[w2]
//         }
//     }