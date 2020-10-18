let mongoose = require('mongoose');

let addToDoSchema = new mongoose.Schema({
    todo: {
        type: String,
        required: true,
        
    }


});
module.exports = mongoose.model('toDo', addToDoSchema);