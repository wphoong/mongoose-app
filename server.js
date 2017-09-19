const express = require('express');
const Task = require('./api/models/todoListModel');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./api/routes/todoListRoutes');

const app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));
app.set("view engine", "ejs");


//mongoose instance connection url
mongoose.Promise = global.Promise;

//local DB
// const dbs = require('./config/db');
// mongoose.connect('mongodb://localhost/mongoosedb');

var url = process.env.MONGOLAB_URI;

// mongoose.connect(dbs.url);

//for heroku
mongoose.connect(url);

//LISTEN SERVER

const port = process.env.PORT || 3000;
routes(app);

app.listen(port, () => {
  console.log('listening on 3000');
});

app.use((req, res) => {
  res.status(404).send({url: req.originalUrl + ' not found'});
});
