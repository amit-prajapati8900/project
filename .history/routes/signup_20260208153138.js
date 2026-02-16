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
router.get("/api/signUp",(req,res)=>{
    res.render("authenticate/signUp.ejs");
});
router.post("/signUp",(req,res)=>{
    res.send("this is working")
})

module.exports = router;