// write a note js script to handel event of ,write a data in file,append,and then read the file and display
// data in console ..
const Em=require("events");
const ee=new Em()
fs=require("fs")
ee.on("data-write",function(){
    fs.writeFile("a.txt","hello",(err)=>{
        console.log(err)
    })
    console.log("data-written")
    ee.emit("data-append")
    ee.emit("data-read")
})
ee.on("data-append",function(){
    ps.appendFile("a.txt","today is friday",function(err){console.log("CSE")})
    console.log("data-appended")
})
ee.on("data-read",function(){
    fs.readFile("utf-8",(err,data)=>{
        if(err){console.log(err)}
        console.log(data)   
    })
})