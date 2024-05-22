const Em=require("events");
const ee=new Em()
var fun1 =(msg)=>{
    console.log("mssg from 1" +msg);
};
var fun2 =(msg)=>{
    console.log("mssg from 2" +msg);
};
ee.on('event1',fun1)
ee.on('event2',fun1)
ee.on('event1',fun2)
ee.on('event2',fun2)
ee.removeListener("event1",fun1)
ee.removeAllListeners("event2",fun2)
ee.emit('event1',"lju")
ee.emit('event2',"lju")