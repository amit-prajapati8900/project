const express = require("express");
const router = express.Router();
const User = require("../database/Paswd");
router.get("/signUp",(req,res)=>{
    res.send("signUp working");
});