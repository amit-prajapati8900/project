const Data = require("../database/data.js");

module.exports.showListing = async (req, res, next) => {
  console.log("everything is ok");
  const alldata = await Data.find().populate("owner");
  if(!alldata){
   next(new ExpressError(400,"something went wruong "));
  }   
//   console.log(alldata);
  res.render("show.ejs",{alldata,req});                   
}