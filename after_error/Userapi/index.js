const http =require("http");
const fs=require("fs");
// const data=fs.readFile(`${__dirname}/Userapi/userapi.json`,"utf-8");
// const objData=JSON.parse(data);

const server =http.createServer((req,res)=>{
    if (req.url =="/") {
        res.end("Hello home");  
    }
    else if(req.url =="/about") {
        res.end("Hello about");  
    }
    else if(req.url =="/contact") {
        res.end("Hello contact");     
    }

    // else if(req.url =="/userapi") {
    //     fs.readFile(`${__dirname}/Userapi/userapi.json`,"utf-8",(err,data) =>{
    //      console.log(data);
    //      res.end(data);
    //     });
    //     res.end(data);     
    // }

    else{
        res.writeHead(404,{"Content-type" : "text/html"} );  
        res.end("404 error"); 
    }
});

server.listen(8000,"127.0.0.1", ()=>{
    console.log("listning to port 8000")
});

