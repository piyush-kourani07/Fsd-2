var pm = require("path")
path=pm.dirname("D:/293-B10/CH-2/sort.js")
console.log(path)

path1=pm.basename("D:/293-B10/CH-2/add.html")
console.log(path1)

ext=pm.extname("D:/293-B10/CH-2/add.html")
console.log(ext)

path2=pm.parse("D:/293-B10/CH-2/add.html")
console.log(path2)
console.log(path2.dir)
console.log(path2.name)
console.log(path2.ext)
