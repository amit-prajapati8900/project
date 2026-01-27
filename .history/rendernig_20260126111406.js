const mongoose = require("mongoose");
const express = require("express");
// const Insert = require("./insertData");
// const mongoose = require("mongoose");
const app = express();
const path = require("path");
const Data = require("./data.js");
// const Data = require("./insertData");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname,"views")));

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
app.get("/home", async (req, res) => {
  console.log("everything is ok");
  const alldata = await Data.find();   // ✅ wait for data
  res.render("show.ejs",{alldata});                   // ✅ send actual documents
});
app.post("/delete/:id", async(req,res)=>{
   let {id} = req.params;
   await Data.findByIdAndDelete(id);
   res.redirect("/home");
});
app.get("/new",((req,res)=>{
   res.render("new.ejs");
}));

app.post("/update",(req,res)=>{
   res.send("working ");
})
app.listen(2000,()=>{
   console.log("express is working");
});

