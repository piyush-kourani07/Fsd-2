// write a data to file and appending data to fie and reading the file data using callback()??

var ps = require("fs")
ps.writeFile("abc.txt","today is thursday",(err)=>{if(err){console.log("Computer")}})
ps.appendFile("abc.txt","today is friday",function(err){console.log("CSE")})
// ps.appendFile("abcd.txt","today is friday",(err,data)=>{})