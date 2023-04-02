const express =require('express');

const app=express();
const port=3000;

app.get("/",(req,res) => {
    res.send("hello akash");
});

//json data
app.get("/temp",(req,res) => {
    res.json({
        id:1,
        name:"akash",
    });
});

app.listen(port,() =>{
    console.log(`listen to port no ${port}`);
});