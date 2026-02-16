const express = require("express");
const router = express.Router();
const User = require("../database/Paswd");
router.get("/api/signUp",(req,res)=>{
    res.send("signUp working");
});