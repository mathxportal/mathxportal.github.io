var queryString = decodeURIComponent(window.location.search)
queryString = queryString.substring(1);
var queries = queryString.split("?");

var OriginalMessage = document.getElementById("OgMessage")