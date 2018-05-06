const express = require('express');
const bodyParser = require("body-parser");
const path = require("path");
const router = express.Router();

const app = express();

app.use(express.static('public'));

app.use(require('./app/routing/htmlRoutes.js'));
app.use(require('./app/routing/apiRoutes.js'));

var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.listen(PORT, function(){
    console.log(`App listening on port ${PORT}`);
});

module.exports = router, bodyParser;
