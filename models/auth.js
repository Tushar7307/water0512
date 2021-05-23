const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        min:6,
        max:256,
        required:true,
        trim:true
    },
    password:{
        type:String,
        min:6,
        max:1024,
        required:true,
    },
    
});

const Auth = mongoose.model('Auth',userSchema);

module.exports = Auth;