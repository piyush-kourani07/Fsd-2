var http = require("http")
var Server=http.createServer(function(req,res){
    if(req.url=="/")
        {
            res.writeHead(200,{'content-Type':"text/html"})
            res.write("<h1>Home</h1><div><ul><li><a href="/">Home</a></li></ul></div>")
            res.end()
        }
   
})
 