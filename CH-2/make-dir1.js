var ps = require("fs")
//ps.mkdirSync("node1")

// ps.writeFileSync("node1/write.txt","hello world")

// ps.appendFileSync("node1/write.txt"," Hi")

// data=ps.readFileSync("node1/write.txt","utf-8")
// console.log(data)
// console.log(data.toString());

// ps.renameSync("node1/write.txt","node1/readwrite.txt")

ps.unlinkSync("node1/readwrite.txt")