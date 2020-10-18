var mongoose = require('mongoose');
require('../models/models')

function dbConnection() {

    mongoose.connect('mongodb://localhost:27017/company').then(() => {
        console.log("Database connected successfully");

    })
        .catch((error) => {
            console.log("Error in connecting to Database");
        });

}
module.exports = {
    dbConnection
}
