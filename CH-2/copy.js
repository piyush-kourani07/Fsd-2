// wap to copy content of file to another file data should be fetch from source.txt and insert into destination.txt ?
var b = require("fs")
b.writeFileSync("node1/source.txt","hello");
data=b.readFileSync("node1/source.txt")
b.writeFileSync("node1/destination.txt",data);
