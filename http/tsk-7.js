// write a node js program to load simple html file and display it contain as html.
var http = require("http")
var url = require("url")
var fs = require("fs")
var addr = "http://localhost:3120/7.html"
var q=url.parse(addr,true)
data=fs.readFileSync("."+q.pathname)
http.createServer(function(req,res){
    res.writeHead(200,{'content-Type':"text/html"})
    res.write(data)
    res.end()
}).listen(3120)