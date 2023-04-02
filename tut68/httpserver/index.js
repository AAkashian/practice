const http =require("http");

const server =http.createServer((req,res)=>{
    if (req.url =="/") {
        res.end("Hello home");  
    }
    else if(req.url =="/about") {
        res.end("Hello about");  
    }
    else if(req.url =="/contact") {
        res.end("Hello contact"); 
        res.writeHead(404,{"Content-type" : "text/html" });  
    }
});

server.listen(8000,"127.0.0.1", ()=>{
    console.log("listning to port 8000")
});

