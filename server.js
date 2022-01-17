require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const PORT = process.env.PORT || 5000;

const corsOptions = {
    origin: 'http://localhost:3000/',
    optionsSuccessStatus: 200
}

const indexRouter = require("./routes/index");

const app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use("/", indexRouter, cors(corsOptions));

app.listen(PORT, (error) => {
    if(!error) console.log(`connected to ${PORT}`)
    else console.log("Error occured, can't start server.")
})