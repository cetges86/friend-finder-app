const server = require('../../server')
const users = require('../data/friends')
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser")

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get("/api/friends", function (req, res) {
    return res.json(surveyResults);
});

router.post("/api/friends", function (req, res) {

    let newFriend = req.body;
    console.log(newFriend);

    let answers = newFriend.scores;

    let friendName = "";
    let friendImg = "";
    let total = 500;
    
    
    for (let i = 0; i < surveyResults.length; i++) {
        let diff = 0;
        let difference = [];
        
        for (let j = 0; j < answers.length; j++) {

            let diff = Math.abs(answers[j] - surveyResults[i].scores[j]);
            difference.push(diff);

        }
        console.log(difference);
        let sum = difference.reduce(function (acc, val) { return acc + val; });
        console.log("sum is " + sum)

        if (sum < total) {
            total = sum;
            sum = 0;
            friendName = surveyResults[i].name;
            friendImg = surveyResults[i].image;
        } else {
            sum = 0;
        }
    }

    surveyResults.push(newFriend);
    res.json({
        friendName: friendName,
        friendImg: friendImg
    });



});

module.exports = router;