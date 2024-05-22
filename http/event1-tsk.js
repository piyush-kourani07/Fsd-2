const Em=require("events");
const { start } = require("repl");
const ee=new Em()

ee.on('end',()=>
{
    console.log('event ended')
});
