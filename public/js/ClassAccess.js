var queryString = decodeURIComponent(window.location.search)
console.log(queryString)
queryString = queryString.substring(1);
console.log(queryString)
var queries = queryString.split("?");
for (var i = 0; i < queries.length; i++)
{
  console.log(queries[i])
}