const bioData={
    name:"vinod",
    age:26,
    channel:"akash",
};

// console.log(bioData.channel);

// const jsonData=JSON.stringify(bioData);
// console.log(jsonData);

fs.readFile("json1.json","utf-8",(err,data) =>{
    const orgData=JSON.parse(data);
    console.log(data);
    console.log(orgData);
});