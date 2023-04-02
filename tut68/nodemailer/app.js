const express= require("express");
 const app=express();

 app.get("/",(req,res) =>{
    res.send("i am a server");
 });

 