var b = require("fs")
const student = [
{name:"piyush",age:19},
{name:"abc",age:22}
]
a=JSON.stringify(student)
// b.writeFileSync("node/s.txt",a);
data= b.readFileSync("node/s.txt","utf-8")
console.log(data)