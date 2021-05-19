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