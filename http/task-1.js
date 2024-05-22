// write node js script to create 2 listerner for a common event and give listner count..
const Em=require("events");
const ee=new Em()
var listerner1=function listerner(){
    console.log("listner1 connected")
}
var listerner2=function listerner(){
    console.log("listner2 conected")
}
ee.on("connect",listerner1)
ee.on("connect",listerner2)
ee.removeListener("connect",listerner1)
// ee.removeAllListeners("connect")
let count=ee.listenerCount("connect")
console.log(count)
ee.emit("connect")
