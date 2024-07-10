const express = require("express");
const app = express();
const Database = require("./dataBase");
const Users = require("./userSchema");


app.use(express.json());//it allows json data
app.post("/api/register",async(req,res)=>{

    const {firstname,lastname} = req.body;  

       const user = await Users.create({firstname,lastname});

       if(!user){
           return res.status(401).json({
           success:false,
           message:"Register success"
       })
       }
           return res.status(201).json({
           success:true,
           message:"Register success"
       })
})
app.listen(8000, () => {
    console.log("Server started on port 8000");
  });
  