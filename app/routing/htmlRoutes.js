const server = require('../../server')
const express = require("express");
const router = express.Router();
const path = require("path");


router.get("/", function(req,res){
    res.sendFile(path.join(__dirname,"../public/home.html"))
})

router.get("/", function(req, res){
    res.set({'content-type': 'text/css'});
    res.sendFile(path.join(__dirname,"../public/css/style.css"))
})

router.get("/", function(req, res){
    // res.set({"content-type": "text/javascript"});
    res.sendFile(path.join(__dirname,"app/public/js/script.js"))
})

router.get("/survey", function(req,res){
    res.sendFile(path.join(__dirname,"../public/survey.html"))
})

module.exports = router;