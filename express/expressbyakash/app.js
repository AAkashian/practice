var express =require('express');

const app=express();

app.get("/",(req,res) => {
    res.send("hello akash");
});

app.get("/about",(req,res) => {
    res.send("hello akashh");
});

app.listen(8000,() =>{
    console.log("listen the port at 8000");
});

