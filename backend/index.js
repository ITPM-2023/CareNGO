import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express();

const PORT = 8000;

//Make DB connection
const DB_URL = 'mongodb+srv://himasha:himasha24@cluster0.fpb7ado.mongodb.net/backend?retryWrites=true&w=majority';

mongoose.connect( DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
} )
.then(() =>{
    console.log(' DB is connected')
})
.catch((err) => console.log ('DB Connection Error',err));

app.listen(PORT, () => {
    console.log (`App is running on ${PORT}`)

});
