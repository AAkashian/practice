const path=require("path");
const express =require('express');
const app=express();
//const hbs=require("hbs");
const port=8000;

//built in middleware


// console.log(path.join(__dirname,"../public"))
const staticPath=path.join(__dirname,"../public");
// const templatePath=path.join(__dirname,"../templates/views");
// const partialPath=path.join(__dirname,"../templates/partials");

//view engine
app.set("view engine","hbs");
// app.set('views',templatePath);
// hbs.registerPartials()

//app.use(express.static(staticPath));

app.get("/",(req,res) =>{
    res.render('index.hbs')
});

app.get("/",(req,res) => {
    res.send("hello akash");
});

app.get("/about",(req,res) => {
    res.send("hello akash first project");
});

//json data
// app.get("/temp",(req,res) => {
//     res.json({
//         id:1,
//         name:"akash",
//     });
// });

app.listen(port,() =>{
    console.log(`listen to port no ${port}`);
});