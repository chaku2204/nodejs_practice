const  fs = require("fs")
// creating new file
// fs.writeFileSync('1-5_read.txt', "welcome file system")
// fs.writeFileSync('1-5_read.txt', "welcome file system nirav hj")
// fs.appendFileSync('1-5_read.txt', "How are you?")


const buf_data = fs.readFileSync('l-5_read_write.txt')
console.log(buf_data)
// its buffer dta
console.log(buf_data.toString())

// fs.renameSync('1-5_read.txt','l-5_read_write.txt')