const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://himasha:himasha24@new.3hgpv5f.mongodb.net/?retryWrites=true&w=majority')

//create model

const Forms=mongoose.model('Forms',{
    //schema creation
    id:String,
    //gbid:String,
    productname:String,
    box:Number,
    name:String,
    mail:String,
    contact:Number
})

module.exports={
    Forms
}