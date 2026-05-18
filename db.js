const mongoose = require('mongoose');

// define connection url

const mongoURL = 'mongodb://localhost:27017/hotels';

mongoose.connect(mongoURL)

const db = mongoose.connection;

// event listner

db.on('connected' , ()=>{
    console.log("connected to mongodb server");
})
db.on('error' , (err)=>{
    console.log("Mongodb connection error: ",err);
})
db.on('disconnected' , ()=>{
    console.log("mongodb disconnected");
})

// export 
module.exports = db;