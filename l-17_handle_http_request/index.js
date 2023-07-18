const http = require("http");
const server = http.createServer((req,res)=>{
    //   console.log(req.url);
    if(req.url == "/"){
      res.end('hello from other side');
    }else if(req.url == "/about"){
        res.end('hello from other about side');
    }else if(req.url == "/contact"){
        
        res.end("hello from contact");
    }else
    {
        res.writeHead(404,{"Content-type":"text/html"});
        res.end("page is not found");
    }

})
 
server.listen(8000,"127.0.0.1",()=>{
    console.log("listening to the port no 8000");
});