
//The request object can be used to get information about the http request
// url,request,header and data.
//The response object can be used to send a response for a current request
const http = require("http");
const server = http.createServer((req,res)=>{
      
      res.end('hello from other side');

})
 
server.listen(8000,"127.0.0.1",()=>{
    console.log("listening to the port no 8000");
});