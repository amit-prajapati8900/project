const mongoose = require("mongoose");
const express = require("express");
// const validedata = require("validedata");
 const validedata = require("./Error/vailidData.js");
// const Insert = require("./insertData");
// const mongoose = require("mongoose");
const app = express();
app.use('/uploads', express.static('uploads'));
const path = require("path");
// const Data = require("./database/data.js");
const ExpressError = require("./Error/ExpressError.js");
// const Data = require("./insertData");
// const asyncError = require("./Error/asyncError");
const session = require("express-session"); 
//cookies
const flash = require("connect-flash");

//cookies
const methodOverride = require('method-override');
const userInfo = require("./routes/users.js"); 
//password
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./database/Paswd.js");
const signUp = require("./routes/signLogin.js");
//password
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname,"views")));
app.use(flash());
app.use(session({secret:"mylastwebpag",resave:false,saveUninitialized:true,cookie:{expires: new Date(Date.now() + 7*24*60*60*1000),maxAge:7*24*60*60*1000,httpOnly:true}}));
// password
app.use(passport.initialize());
app.use(passport.session());
// app.use(new LocalStrategy(User.authorization()));
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
// password

main().then((res)=>{console.log("database is working")})
.catch((err)=>{console.log(err)});

async function main() {
   await mongoose.connect("mongodb://127.0.0.1:27017/jcc");
}
//flash
app.use((req,res,next)=>{
   res.locals.successMSG = req.flash("success");
   res.locals.Delete = req.flash("Delete");
   res.locals.Update = req.flash("Update");
   res.locals.error = req.flash("error");
   next();
});

// password

// password

app.use("/api",userInfo);
app.use("/api",signUp);
// Data.insertMany({
//    name:"amit",
//    deg:"AXC",
//    age:23
// })
// .then(() => console.log("Data inserted"))
//  .catch(err => console.error(err));

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

