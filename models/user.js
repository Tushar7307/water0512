const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const Joi =require('joi');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        
        min:3,
        max:50
    },
    email:{
        type:String,
        
        min:3,
        max:50,
        unique:true
    },
    password:{
        type:String
    } 
});
userSchema.methods.generateAuthToken =  function(){
    const token = jwt.sign({_id: this._id});
    return token;
}
const User = mongoose.model('User',userSchema);

function validateUser(user) {
    const schema = Joi.object({
        name:Joi.string().min(3).max(50).required(),
        email:Joi.string().min(3).max(50).required().email(),
        password:Joi.string().min(3).max(50).required()
    });
    return schema.validate(user);
}
exports.User = User;
exports.validate = validateUser;