// write node js to print query string of url write in file using callback .
var fd = require('fs')
var u = require("url")
var addr1="http://localhost:8080/default.html?year=2025&month=feb";
var q = u.parse(addr1,true)
var a=JSON.stringify(q.query)
fd.writeFile("w3.txt",a,(err)=>{if(err){console.log("Computer")}})
