const mongoose = require('mongoose');

//define person schema

const personSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    age:{
        type:Number
    },
    work:{
        type:String,
        enum:['chef','waiter','managar'],
        required: true,
    },
    mobile:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    address:{
        type:String
    },
    salary:{
        type:Number,
        required: true
    }
});

const Person = mongoose.model('person',personSchema);
module.exports = Person;