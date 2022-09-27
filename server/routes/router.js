const express = require("express");
const router = express.Router();
const users = require("../models/userSchema");

// router.get("/",(req,res)=>{
//     console.log("connect");
// });

router.post("/register",(req,res)=>{
     console.log(req.body);
})


module.exports = router;

