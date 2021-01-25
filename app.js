// jshint esversion:6
// jshint esversion:8
 
// IMPORTING MODULES
const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

// READING ENVIRONMENT VARIABLES
const dotenv = require("dotenv").config();
// .config({path: path.join(__dirname, '.env')});or use this

 
 // INITIALISE THE EXPRESS APP
const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));

// IF THERE IS ANY STATIC FILE PUT IT IN PUBLIC FOLDER
app.use(express.static("public"));
 
//HOME ROUTE GET REQUESTS
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html");
});
 
//HOME ROUTE POST REQUESTS
app.post("/", function(req, res) {
  
  });
 
//SET UP EXPRESS SERVER TO LISTEN TO CURRENT PORT
const port = process.env.LOCAL_PORT;
const host = process.env.HOST;

app.listen(process.env.PORT || port, function() {
  console.log(`test app in server ${host}:${port}`);
});