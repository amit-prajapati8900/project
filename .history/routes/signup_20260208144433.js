const express = require("express");
// app.use(express.static(path.join(__dirname, "public")));
const router = express.Router();
const User = require("../database/Paswd");
router.get("/api/signUp",(req,res)=>{
    res.send("signUp working");
});
module.exports = router;