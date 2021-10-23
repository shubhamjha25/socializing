const express = require('express');

const app = express();

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');

dotenv.config();

const port = process.env.PORT;

mongoose.connect(process.env.MONGODB_URL, 
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log("MongoDB Connected ...");
});

app.listen(port, () => {
    console.log(`Server Running on Port ${port}`)
});