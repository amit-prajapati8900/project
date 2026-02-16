const express = require("express");
app.use(express.static(path.join(__dirname, "public")));
const router = express.Router();
const User = require("../database/Paswd");
router.get("/signUp",(req,res)=>{
    res.render("signUp.ejs");
});
module.exports = router;