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

// Middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

app.get("/", (req, res) => {
    res.send("socializing Server Running");
})

app.listen(port, () => {
    console.log(`Server Running on Port ${port}`)
});