const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workerSchema = new Schema({
    firstname:{
        type:String
    },
    lastname:{
        type:String
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    },
    password:{
        type:String
    }
    
}, {timestamps:true})

const worker = mongoose.model('worker', workerSchema);

module.exports = worker