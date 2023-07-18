const fs = require("fs");

console.log(fs.readFileSync("read.txt","utf-8"))
console.log("its exicut afte read file")

fs.readFile("read.txt","utf-8",(err,data)=>{
    console.log(data)
})
console.log("its exicut before read file")

