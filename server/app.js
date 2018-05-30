require('dotenv-safe').config({
  allowEmptyValues: true
}); // loads .env file
const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/routes.js");
const app = express();

const mysql = require('mysql');

var connection = mysql.createConnection({
  host     : process.env.MYSQL_HOST,
  user     : process.env.MYSQL_USER,
  password : process.env.MYSQL_PASSWORD,
  database : process.env.MYSQL_DB
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

const server = app.listen(3000, function () {
    console.log("app running on port.", server.address().port);
});