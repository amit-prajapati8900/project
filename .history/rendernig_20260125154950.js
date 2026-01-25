const mongoose = require("mongoose");
const express = require("express");
const Insert = require("./insertData");
// const mongoose = require("mongoose");
const app = express();
const path = require("path");
// const Data = require("./data.js");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// app.use(express.static(path.join(__dirname,"views")));

main().then((res)=>{console.log("database is working")})
.catch((err)=>{console.log(err)});

async function main() {
   await mongoose.connect("mongodb://127.0.0.1:27017/jcc");
}
// Data.insertMany({
//    name:"amit",
//    class:"AXC",
//    age:23
// })
// .then(() => console.log("✅ Data inserted"))
//  .catch(err => console.error(err));
app.get("/home",(req,res)=>{
   console.log("every thi s ok");
   res.send({Insert});
});

app.listen(2000,()=>{
   console.log("express is working");
});

