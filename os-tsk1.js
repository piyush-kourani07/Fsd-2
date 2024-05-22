// write a node js script to create folder xyz in temp also create file name taste.txt in side xyz folder.and now check plat form is win32 or not .
var ps= require('fs')
var os = require('os')
f=os.tmpdir()
// ps.mkdirSync(f+"/xyz")
a=os.platform()
if(a=='win32'){
    ps.writeFileSync(f+"/xyz/taste1.txt",'os-32bit')
}
