var queryString = decodeURIComponent(window.location.search)
console.log(queryString)
queryString = queryString.substring(1);
console.log(queryString)
var queries = queryString.split("?");

const domain = 'meet.jit.si';
const options = {
    roomName: queries[1],
    width: 700,
    height: 700,
    parentNode: document.querySelector('#meet')
};

const api = new JitsiMeetExternalAPI(domain, options);