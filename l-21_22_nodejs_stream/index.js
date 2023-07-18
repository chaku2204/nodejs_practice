const fs = require("fs");
const http = require("http");
const server = http.createServer();

server.on("request",(req,res)=>{
   
   //1st way
  // const restream = fs.createReadStream("input.txt");
//    restream.on('data',(chunk)=>{
//        res.write(chunk);
//    })
//    restream.on('end',()=>{
//         res.end();
//    });
//    restream.on('error',(err)=>{
//         console.log(err);
//         res.end("file is not found");
//    })

// 2nd way
    const restream = fs.createReadStream("input.txt");
    restream.pipe(res);

                        

});

server.listen(8000,"127.0.0.1");