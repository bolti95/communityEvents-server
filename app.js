require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

// app.use((req, res ,next) => {
//     const corsWhitelist = [
//         'http://localhost:3000/',

//     ]
// })
// 
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}

mongoose.connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
// mongoose.set('useCreateIndex', true);

const indexRouter = require("./routes/index");
const eventsRouter = require("./routes/events");

const app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use("/", indexRouter, cors(corsOptions));
app.use("/events", eventsRouter, cors(corsOptions));

module.exports = app;