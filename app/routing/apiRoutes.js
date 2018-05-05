const server = require('../../server')
const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/api/friends", function(req,res){
    return res.json(surveyResults);
});

// router.post("/api/friends", function(req,res){
//     //post function


// });

module.exports = router;