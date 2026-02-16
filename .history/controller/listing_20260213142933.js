const Data = require("../database/data.js");
const User = require("../database/Paswd");


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
   const post = await Data.findById(id); //////const url = req.file?.path; const filename = req.file?.filename;
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
module.exports.updateData = async (req, res) => {
  try {
    const data = await Data.findById(req.params.id);
    if (!data) {
      req.flash("error", "Data not found");
      return res.redirect("/api/home");
    }

    // Update fields
    data.name = req.body.name;
    data.deg = req.body.deg;
    data.age = req.body.age;

    // Image logic
    if (req.file) {
      data.img = { url: req.file.path, filename: req.file.filename };
    } else {
      data.img = {
        url: req.body.existingImgUrl,
        filename: req.body.existingImgFilename
      };
    }

    await data.save();

    req.flash("success", "Post updated successfully");
    res.redirect("/api/home");
  } catch (err) {
    console.error("Update error:", err);
    req.flash("error", "Something went wrong while updating");
    res.redirect("/api/home");
  }
};


// update
module.exports.updateData = async(req, res) => {
    let { id } = req.params;
   //  const post = await Data.findById(id);
const post = await Data.findById(id);
   if(!post){
      req.flash("error","You are not authorized to update this post");
      res.redirect("/api/home");
   }
   if(!post.owner || post.owner.toString() !== req.user._id.toString()){
      req.flash("error", "You are not authorized to update this post");
      return res.redirect("/api/home");
   }

    res.render("update.ejs", { data: post });
}

module.exports.patchdata = async (req, res) => {
   let { id } = req.params;
   let { name, deg, age, img } = req.body;

   // Owner check add kar do (security ke liye – bahut zaroori)
   const post = await Data.findById(id);
   if (!post) {
      req.flash("error", "Post not found");
      return res.redirect("/api/home");
   }

   if (post.owner?.toString() !== req.user._id.toString()) {
      req.flash("error", "You are not authorized to update this post");
      return res.redirect("/api/home");
   }

   // Direct update – .save() ki zaroorat nahi
   await Data.findByIdAndUpdate(id, { name, deg, age, img }, { runValidators: true });

   req.flash("success", "Post successfully updated");  // "Update" ki jagah "success" better
   res.redirect("/api/home");
};

// ====================================================================================================================================
// this the part of log in and signUp signout

// signUpform
module.exports.SignUpform = (req,res)=>{
    res.render("authenticate/signUp.ejs");
}
// signUp
module.exports.SignUp =async(req,res)=>{
    try{
    let {username,email,password} = req.body;
    const newUser = new User({email,username});
    const registerUser = await User.register(newUser,password);
    console.log(registerUser);
    req.logIn(registerUser,(err)=>{
        if(err){
            return next(err);
     }
    req.flash("success", " Sign-Up successfully");
    res.redirect("/api/home");
    }); }catch(err) {
    req.flash("error", err.message);
    res.redirect("/api/signUp");
}}
// logInform
module.exports.logInform = (req,res)=>{
    res.render("authenticate/logIn.ejs");
} 
// login

module.exports.logIn = async(req,res)=>{
    req.flash("success", " wellcome back Own page");
    res.redirect("/api/home");
}
// logout

module.exports.logOut = (req,res,next)=>{
    req.logout((err)=>{
        if(err){
            return next(err); 
        }
        req.flash("success","You are log out");
        res.redirect("/api/home");
    });
}