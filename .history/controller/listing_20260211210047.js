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
// postNewData
module.exports.postNewdata = async (req, res) => {
   console.log("Is authenticated?", req.isAuthenticated());
   console.log("Current user:", req.user);           // ← yeh dekhna zaroori
   console.log("User ID:", req.user?._id);

   // Safest way: req.body se direct access + fallback
   const { name, deg, age, img } = req.body || {};

   // Basic validation (validedata middleware ke baad bhi extra safety)
   if (!name || !deg || !age) {
      req.flash("error", "Name, Degree aur Age bharni zaroori hai!");
      return res.redirect("/api/new");   // ya jo bhi new form ka route hai
   }

   // Authentication check
   if (!req.user || !req.user._id) {
      req.flash("error", "Authentication failed - please login again");
      return res.redirect("/login");     // ya jo bhi login route hai
   }

   const newData = new Data({
      name,          // ← yeh add karna bhool gaye the
      deg,
      age,
      img,
      owner: req.user._id    // ← important line
   });

   await newData.save();

   req.flash("success", "Post successfully created");
   res.redirect("/api/home");
}

