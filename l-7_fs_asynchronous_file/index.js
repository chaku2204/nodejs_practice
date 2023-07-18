// const fs = require('fs')


// // fs.writeFile('read.txt','today is Good',(err)=>{
// //     console.log("file is created");
// //     console.log(err)
// // })
// // fs.appendFile('read.txt'," plese I need job", (err)=>{
// //     console.log("task completed")
// // })

// fs.readFile("read.txt","UTF-8",(err,data)=>{
//     console.log(`read file ${data}`)
// });

const fs = require('fs/promises');

async function example() {
  try {
    const data = await fs.readFile('read.txt', { encoding: 'utf8' });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
example();


