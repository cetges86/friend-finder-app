const express = require('express');
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());








app.listen(PORT, function(){
    console.log(`App listening on port ${PORT}`);
});