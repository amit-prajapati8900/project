const mongoose = require ("mongoose");
const express = require("express");
const app= express();
const require = "./data.js";

main().then((res)=>{console.log("database is working")})
.catch((err)=>{console.log(err)});

async function main() {
   await mongoose.connect("mongodb://127.0.0.1:27017/jcc");
}


app.get((req,res)=>{
   console.log("every thi s ok");
});

app.listen(2000,()=>{
   console.log("express is working");
})

