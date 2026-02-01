const mongoose = require("mongoose");
const express = require("express");
// const Insert = require("./insertData");
// const mongoose = require("mongoose");
const app = express();
const path = require("path");
const Data = require("./data.js");
// const Data = require("./insertData");
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
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
//    deg:"AXC",
//    age:23
// })
// .then(() => console.log("Data inserted"))
//  .catch(err => console.error(err));
app.get("/home", async (req, res) => {
  console.log("everything is ok");
  const alldata = await Data.find();   
  res.render("show.ejs",{alldata});                   // 
});
app.delete("/delete/:id", async(req,res)=>{
   let {id} = req.params;
   await Data.findByIdAndDelete(id);
   res.redirect("/home");
});
app.get("/new",((req,res)=>{
   res.render("new.ejs");
}));
app.post("/newdata",(req,res)=>{
   let {name,deg,age} = req.body;
   const alldata = Data({name,deg,age});
   alldata.save();
   res.redirect("/home");
});
app.get("/update/:id", async (req, res) => {
    let { id } = req.params;
    const record = await Data.findById(id);
    res.render("update.ejs", { data: record });
});
app.patch("/update/:id",async(req,res)=>{
   let {id} = req.params;
   let {name,deg,age} = req.body;
   const ins =await Data.findByIdAndUpdate(id,{name,deg,age});
   ins.save();
   res.redirect("/home");
})

app.listen(2000,()=>{
   console.log("express is working");
});

