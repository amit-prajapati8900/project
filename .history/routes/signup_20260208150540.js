const express = require("express");
const app = express();
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));
const router = express.Router();
const User = require("../database/Paswd");
router.get("/signUp",(req,res)=>{
    res.render("/views/authenticate/signUp.ejs");
});
module.exports = router;