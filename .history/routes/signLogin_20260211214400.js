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
const Listing = require("../controller/listing");

// SignUP
router.get("/signUp",(Listing.SignUpform));

router.post("/signUp",(Listing.SignUp));

// loginform
router.get("/logIn",(Listing.logInform));
// login
router.post("/logIn",passport.authenticate("local",{failureRedirect:"/api/logIn", failureFlash:true}),(Listing.logIn));
// logout

router.get("/logout",(Listing.logOut));

module.exports = router;