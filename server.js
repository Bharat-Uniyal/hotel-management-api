const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();
const port = process.env.port|| 3000;
const passport = require('./auth');





const bodyParser = require('body-parser');
app.use(bodyParser.json());

//middleware
const logRequest = (req,res,next) =>{
  console.log(`${new Date().toLocaleString()} Request Made to : ${req.originalUrl}`);
  next();
}
app.use(logRequest);




app.use(passport.initialize());

const localAuthMiddleware = passport.authenticate('local',{session:false});


app.get('/', function(req, res) {
  res.send('Hello WorldBharat');
})


const personRoutes = require('./routes/personRoutes');
const menuRoutes = require('./routes/menuRoutes');


app.use('/person',localAuthMiddleware,personRoutes);
app.use('/menu',menuRoutes);

app.listen(3000,()=>{
    console.log('listening on port 3000');
})


// comment add