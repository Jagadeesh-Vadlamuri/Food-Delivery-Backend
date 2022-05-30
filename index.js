const express = require('express');
const cors = require('cors');
// const stripe = require('stripe') 
// ("sk_test_51L4pzySFy01sV0HwzYCPK5FreWmsibAmzC0hpJpNH0Y36zvvBQmGm7eSpoXZ7GIvGLoEyGK2vQJjXWbaG2Xst9Jl00GSSbhXLg");
// // const uuid = require('uuid.v4');
const mongoose = require('mongoose');
// const router = require('./routes/routes');
const app = express();
app.use(cors());
app.use(express.json());
app.use('/', require('./routes/routes'));
app.use('/auth', require('./routes/auth'));
// app.use('/posts', require('./routes/posts'));

let port = process.env.PORT || 5000;

let URI = "mongodb+srv://Jagadeesh-Vadlamuri:ggwEokKGhSgGWnx3@cluster0.c42r0.mongodb.net/foodOrderApp?retryWrites=true&w=majority"

mongoose.connect(URI).then(() => {
    try{
        app.listen(port, () => {
            console.log("Mongo DB Connected on"+" "+port)
        })
    } catch(err){
        console.log(err)
    }
});



