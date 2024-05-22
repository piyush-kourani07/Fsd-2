// create a json object shape which contain array of object , calculate perimeter of sqare and circle by using side value and diameter
// .write obejct as well as and perimeter of value of square and circle in shape.txt file.
var b = require("fs")
const s = [
{name:"square",side:5},
{name:"circle",diameter:6}
]
a=JSON.stringify(s)
b.writeFileSync("node/shape.txt",a);

pos= 4*s[0].side
poc = 2*3.14*(s[1].diameter/2)

b.appendFileSync("node/shape.txt"," Perimeter of Square :: "+ pos + " Perimeter of circle :: "+poc)