const express = require('express');
const bodyParser = require("body-parser");
const path = require("path");
const router = express.Router();

const app = express();


app.use(express.static('public'));

app.use(require('./app/routing/htmlRoutes.js'));
app.use(require('./app/routing/apiRoutes.js'));
///Users/Chris/Desktop/Developer/Homework/13-Homework/friend-finder-app/app/routing

var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//api 
app.get("/api/friends", function(req,res){
    return res.json(surveyResults);
});

app.post("/api/friends", function(req,res){
    //post function


});


app.listen(PORT, function(){
    console.log(`App listening on port ${PORT}`);
});

module.exports = router;
