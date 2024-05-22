// read the data from the file and sort it in asending order
var b = require("fs")
// b.writeFileSync("node1/s2.txt","2 5 7 5 1 9");
data=b.readFileSync("node1/s2.txt","utf-8")
data=data.split(" ")
data=data.sort()
console.log(data)