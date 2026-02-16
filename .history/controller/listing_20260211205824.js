const Data = require("../database/data.js");

// show route
module.exports.showListing = async (req, res, next) => {
  console.log("everything is ok");
  const alldata = await Data.find().populate("owner");
  if(!alldata){
   next(new ExpressError(400,"something went wruong "));
  }   
//   console.log(alldata);
  res.render("show.ejs",{alldata,req});                   
}

// delete route
module.exports.delete = async (req, res) => {
   const { id } = req.params;

   // 1. Post find karo
   const post = await Data.findById(id);

   // 2. Post nahi mila
   if (!post) {
      req.flash("error", "Post not found");
      return res.redirect("/api/home");
   }

   // 3. Owner check (authorized nahi hai)
   if (!post.owner || post.owner.toString() !== req.user._id.toString()) {
      req.flash("error", "You are not authorized to delete this post");
      return res.redirect("/api/home");
   }

   // 4. Delete karo
   await Data.findByIdAndDelete(id);

   // 5. Success message
   req.flash("success", "Post successfully deleted");   // consistent key "success"
   res.redirect("/api/home");
}
// datanew
module.exports.newData = (req,res)=>{
   res.render("new.ejs");
}

