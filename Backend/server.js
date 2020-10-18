
var db = require('./db/db')
var routes = require('./routes/route')


var express = require('express');
var cors = require('cors')

var app = express();

var bodyParser=require('body-parser')
app.use(bodyParser.json())
app.use(cors())

routes.api(app)
const port = 5000;
app.listen(port,() => {
    db.dbConnection();
    
    console.log("server is listening on"+"--"+port);

});