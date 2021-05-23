const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
    title:{
        type:String,
        min:3,
        trim:true,
        required:true
    },
    list_id:{
        type:String
    }
});

const List = mongoose.model('List',listSchema);

module.exports = List;