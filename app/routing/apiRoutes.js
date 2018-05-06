//dependencies
const server = require('../../server')
const users = require('../data/friends')
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser")

//for req.body usage
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get("/api/friends", function (req, res) {
    return res.json(surveyResults);
});

router.post("/api/friends", function (req, res) {
    //saves off object to be added to api, with all responses
    let newFriend = req.body;
    console.log(newFriend);

    //saves off scores portion of responses
    let answers = newFriend.scores;

    //establishes variables for matching friend
    let friendName = "";
    let friendImg = "";
    //establishes a value that the resulting sum will always be less than, to get into if statement
    let total = 500;
    
    
    for (let i = 0; i < surveyResults.length; i++) {
        let diff = 0;
        //new array with the difference values
        let difference = [];
        
        for (let j = 0; j < answers.length; j++) {
            //takes absolute value of differences
            let diff = Math.abs(answers[j] - surveyResults[i].scores[j]);
            //pushes difference to new array
            difference.push(diff);

        }
        console.log(difference);
        //adds up the sum of all values in the difference array
        let sum = difference.reduce(function (acc, val) { return acc + val; });
        console.log("sum is " + sum)
        //checks each friend against a total, and the lowest total difference will be the resulting friend
        if (sum < total) {
            //establishes the new total difference to beat
            total = sum;
            //resets the sum each loop
            sum = 0;
            friendName = surveyResults[i].name;
            friendImg = surveyResults[i].image;
        } else {
            sum = 0;
        }
    }
    //adds new user to API
    surveyResults.push(newFriend);
    //pushed results back for html page to use
    res.json({
        friendName: friendName,
        friendImg: friendImg
    });



});

module.exports = router;