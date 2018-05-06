const server = require('../../server')
const express = require("express");
const bodyParser = require("body-parser")
const router = express.Router();
const users = require('../data/friends')

router.use(bodyParser.urlencoded({extended:true}));
router.use(bodyParser.json());

router.get("/api/friends", function(req,res){
    return res.json(surveyResults);
});

router.post("/api/friends", function(req,res){
    
    var newFriend = req.body;
    surveyResults.push(newFriend);
    res.json(newFriend);

    

});

module.exports = router;