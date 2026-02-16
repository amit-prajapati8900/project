const mongoose = require("mongoose");
const express = require("express");
// const validedata = require("validedata");
 const validedata = require("./Error/vailidData.js");
// const Insert = require("./insertData");
// const mongoose = require("mongoose");
const app = express();
const path = require("path");
const Data = require("./database/data.js");
const ExpressError = require("./Error/ExpressError.js");
// const Data = require("./insertData");
const asyncError = require("./Error/asyncError");
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

app.get("api/home",validedata,asyncError(async (req, res, next) => {
  console.log("everything is ok");
  const alldata = await Data.find();
  if(!alldata){
   next(new ExpressError(400,"something went wruong "));
  }   
  res.render("show.ejs",{alldata});                   
}));
app.delete("/api/delete/:id",asyncError(async(req,res)=>{
   let {id} = req.params;
   await Data.findByIdAndDelete(id);
   res.redirect("api/home");
}));
app.get("/api/new",((req,res)=>{
   res.render("new.ejs");
}));
app.post("/api/newdata",validedata,asyncError(async(req,res)=>{
   let {name,deg,age,img} = req.body;
   const alldata = await Data({name,deg,age,img});
   alldata.save();
   res.redirect("/api/home");
}));
app.get("/api/update/:id",validedata,asyncError( async(req, res) => {
    let { id } = req.params;
    const record = await Data.findById(id);
    res.render("/api/update.ejs", { data: record });
}));
app.patch("/api/update/:id",validedata,asyncError(async(req,res)=>{
   let {id} = req.params;
   let {name,deg,age,img} = req.body;
   const ins =await Data.findByIdAndUpdate(id,{name,deg,age,img});
   ins.save();
   res.redirect("/api/home");
}));
// path exist nhi ho tab
app.use((req, res, next) => {
next(new ExpressError(404, "Page not found"));
});

// ERR
app.use((err,req,res,next)=>{
let {status=500, message="data not found"} = err;
res.status(status).send(message);
});
app.listen(2000,()=>{
   console.log("express is working");
});

