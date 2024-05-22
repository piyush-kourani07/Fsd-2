var u = require("url")
var addr="http://localhost:8080/default.html?year=2025&month=feb";
var a = u.parse(addr)
console.log(a)