const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        min:3,
        trim:true,
        required:true
    },
    list_id:{
        type:String,
        required:true
    },
    completed:{
        type:Boolean,
        default:false,
        required:true
    }
});

const Task = mongoose.model('Task',taskSchema);

module.exports = Task;