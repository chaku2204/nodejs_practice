const EventEmitter= require("events");

const event = new EventEmitter();

event.on('sayMyName',(src,msg)=>{
    console.log(`Your Name is Nirav ${src} and ${msg}`);
})

event.emit("sayMyName",200,"ok");



 