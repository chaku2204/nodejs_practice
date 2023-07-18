const fs = require('fs');

const biodata = {
    name: "Nirav",
    age:26,
    Degree : "computer Science",
};

// const jsonData = JSON.stringify(biodata);
// fs.writeFile('json1.json',jsonData,(err)=>{
//     console.log("done");
// });

fs.readFile("json1.json","utf-8",(err,data)=>{
    const orgdata = JSON.parse(data);
    console.log(data);
    console.log(orgdata);
})