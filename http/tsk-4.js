var http = require("http")
var url = require("url")
// var addr = "http://localhost:8080/default.html?year=2010&month=may"
http.createServer(function(req,res){
    var q=url.parse(req.url,true).query
    res.write(q.year+"\n")
    res.write(q.month)
    res.end()
}).listen(8080)