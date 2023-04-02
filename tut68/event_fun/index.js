const EventEmitter=require("events");

const event=new EventEmitter();

 event.on("checkpage",(sc,msg) =>{
    console.log(`status code is ${sc} and the page is ${msg}`);
});

// event.on("anyhing",() =>{
//     console.log("akash");
// });
// event.on("anyhing1",() =>{
//     console.log("patel");
// });
// event.on("anyhing2",() =>{
//     console.log("bhagwan");
// });

event.emit("checkpage",200,"ok");

// event.on("checkpage",(sc,msg) =>{
//     console.log(`status code is ${sc} and the page is ${msg}`);
// });