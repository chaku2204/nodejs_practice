const http = require("http");

const fs = require("fs");
const server = http.createServer((req,res)=>{
    //   console.log(req.url);
   const data =  fs.readFileSync("user_api.json","utf-8")
   
    const objdata = JSON.parse(data);
    console.log(typeof(objdata[0].id));
        
    if(req.url == "/"){
      res.end('hello from other side');
    }else if(req.url == "/about"){
        res.end('hello from other about side');
    }else if(req.url == "/contact"){
        
        res.end("hello from contact");
    }else if(req.url == "/userAPI"){
       res.writeHead(200, {"content-type": "application/json"});
       const id = (JSON.stringify(objdata));
       
       res.end(id);
         
    }else{
        res.writeHead(404,{"Content-type":"text/html"});
        res.end("page is not found");
    }

})
 
server.listen(8000,"127.0.0.1",()=>{
    console.log("listening to the port no 8000");
});