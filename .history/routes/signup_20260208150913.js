const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));
const router = express.Router();
const User = require("../database/Paswd");
router.get("/signUp",(req,res)=>{
    res.render("../signUp.ejs");
});
module.exports = router;