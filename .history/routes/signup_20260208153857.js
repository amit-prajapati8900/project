const express = require("express");
const app = express();
const path = require("path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
const router = express.Router();

const User = require("../database/Paswd");
const { register } = require("module");
router.get("/signUp",(req,res)=>{
    res.render("authenticate/signUp.ejs");
});
router.post("/signUp",async(req,res)=>{
    let {username,email,password} = req.body;
    const newUser = new User({email,username});
    const registerUser = await User.register(newUser,password);
    console.log(newUser);
    res.redirect("/home");
})

module.exports = router;