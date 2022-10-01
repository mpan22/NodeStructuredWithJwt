const { date } = require('@hapi/joi');
const mongoose= require('mongoose');

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    cart:{
        type:Array,
        default:[]
    },
    date:{
        type:Date,
        default:Date.now
    },
    city:String
})

module.exports= mongoose.model('UserC',userSchema);