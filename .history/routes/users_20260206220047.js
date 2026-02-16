const express = require("express");

// const Insert = require("./insertData");
// const mongoose = require("mongoose");
const app = express();
const validedata = require("../Error/vailidData.js");
const path = require("path");
const Data = require("../database/data.js");
const ExpressError = require("../Error/ExpressError.js");
// const Data = require("./insertData");
const asyncError = require("../Error/asyncError");
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname,"views")));
const router = express.Router();

router.get("/home",validedata,asyncError(async (req, res, next) => {
  console.log("everything is ok");
  const alldata = await Data.find();
  if(!alldata){
   next(new ExpressError(400,"something went wruong "));
  }   
  res.render("show.ejs",{alldata});                   
}));
router.delete("/delete/:id",asyncError(async(req,res)=>{
   let {id} = req.params;
   await Data.findByIdAndDelete(id);
   res.redirect("/api/home");
}));
router.get("/new",((req,res)=>{
   res.render("new.ejs");
}));
router.post("/newdata",validedata,asyncError(async(req,res)=>{
   let {name,deg,age,img} = req.body;
   const alldata = await Data({name,deg,age,img});
   alldata.save();
   res.redirect("/api/home");
}));
router.get("/update/:id",validedata,asyncError( async(req, res) => {
    let { id } = req.params;
    const record = await Data.findById(id);
    res.render("update.ejs", { data: record });
}));
router.patch("/update/:id",validedata,asyncError(async(req,res)=>{
   let {id} = req.params;
   let {name,deg,age,img} = req.body;
   const ins =await Data.findByIdAndUpdate(id,{name,deg,age,img});
   ins.save();
   res.redirect("/api/home");
}));

module.exports = router;