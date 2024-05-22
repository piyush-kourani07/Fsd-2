const Em=require("events");

const ee=new Em()

ee.on('end',()=>
    {
        ee.emit('start',10,20)
        console.log('event ended')
    });

ee.on('start',(start,end)=>
{
    console.log('event started')
    console.log(`${start}`)
    console.log(`${end}`)
});
ee.emit("end")

