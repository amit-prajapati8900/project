const express = require("express");
const app = express();
const path = require("path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
const passport = require("passport");
const session = require("express-session"); 
//cookies
const flash = require("connect-flash");
app.use(flash());
app.use(session({secret:"mylastwebpag",resave:false,saveUninitialized:true,cookie:{expires: new Date(Date.now() + 7*24*60*60*1000),maxAge:7*24*60*60*1000,httpOnly:true}}));

app.use(express.static(path.join(__dirname, "public")));
const router = express.Router();

const User = require("../database/Paswd");
const { register } = require("module");

// SignUP
router.get("/signUp",(req,res)=>{
    res.render("authenticate/signUp.ejs");
});
router.post("/signUp",async(req,res)=>{
    try{
    let {username,email,password} = req.body;
    const newUser = new User({email,username});
    const registerUser = await User.register(newUser,password);
    console.log(registerUser);
    req.flash("success", " Sign-Up successfully");
    res.redirect("/api/signUp");
    } catch(err) {
    req.flash("errorMSG", err.message);
    res.redirect("/api/signUp");
}
});
// login
router.get("/logIn",(req,res)=>{
    res.render("authenticate/logIn.ejs");
});


router.post("/logIn",passport.authenticate("Local",{failureRedirect:"/api/logIn", failureFlash:true}),async(req,res)=>{
    req.flash("success", " Log-in successfully");
    res.redirect("/api/logIn");
})

module.exports = router;