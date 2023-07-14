const mongoose = require("mongoose");
var mongoURL = 'mongodb+srv://web:kali@cluster0.oig9riw.mongodb.net/pizza';

mongoose.connect(mongoURL, {useUnifiedTopology:true, useNewUrlParser:true});

var db = mongoose.connection
db.on('connected', ()=>{
    console.log(`Mongo DB is connected Successfully`);
})
db.on('error', ()=>{
    console.log(`Mongo DB connection failed`);
})
module.exports = mongoose;