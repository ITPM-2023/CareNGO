const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const postRoutes = require("./Routes/posts");

//invoking express
const app = express();

//app middleware
app.use(bodyParser.json());

//route middleware

app.use("/Posts", postRoutes);

//declaring a port to run the app
const PORT = 8000;

//Make DB Connection
const DB_URL = 'mongodb+srv://himasha:himasha24@cluster0.fpb7ado.mongodb.net/backend?retryWrites=true&w=majority';

mongoose.connect(DB_URL,{
    useNewUrlParser : true,
    useUnifiedTopology: true
})
.then (()=>{
    console.log("DB Connected");
})
.catch((err) => console.log('DB Connection Error',err));

app.listen(PORT,()=>{
    console.log(`App is running on ${PORT}`);
});

