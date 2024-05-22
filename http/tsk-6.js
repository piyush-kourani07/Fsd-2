// write node js script to request sever to display json data to browser
var http = require("http")
http.createServer(function(req,res){
    if(req.url=='/'){
        const a={'name':'abc','age':35}
        res.writeHead(200,{'content-Type':"text/html"})
        res.write(JSON.stringify(a)) 
        res.end()
    }
    
}).listen(3130)
