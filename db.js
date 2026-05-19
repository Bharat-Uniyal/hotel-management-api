const mongoose = require('mongoose');
require('dotenv').config();
// define connection url

const mongoURL = process.env.DB_local;


// const mongoURL = 'mongodb://bbharatuniyal_db_user:<db_password>@ac-mvnnrum-shard-00-00.7lm9hde.mongodb.net:27017,ac-mvnnrum-shard-00-01.7lm9hde.mongodb.net:27017,ac-mvnnrum-shard-00-02.7lm9hde.mongodb.net:27017/?ssl=true&replicaSet=atlas-q2hf79-shard-0&authSource=admin&appName=Cluster0';


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