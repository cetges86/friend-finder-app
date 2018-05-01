const express = require('express');
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')))

app.get("/", function(req,res){
    res.sendFile(path.join(__dirname,"app/public/home.html"))
})

app.get("/survey", function(req,res){
    res.sendFile(path.join(__dirname,"app/public/survey.html"))
})







app.listen(PORT, function(){
    console.log(`App listening on port ${PORT}`);
});

module.exports = {
    app:app,
    PORT:PORT,
    express:express,
    bodyParser:bodyParser,
    path:path
}