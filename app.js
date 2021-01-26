// jshint esversion:6
// jshint esversion:8
 
// IMPORTING MODULES
const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const date = require(__dirname + "/date.js");

// READING ENVIRONMENT VARIABLES
const dotenv = require("dotenv").config();
// .config({path: path.join(__dirname, '.env')}); or use this
 
// INITIALISE THE EXPRESS APP AND EJS
const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.set("view engine", 'ejs');

// global variable scope
const items = ['Pray','Drink Water', 'Make bedroom','morning worship'];
const workList = [];

// IF THERE IS ANY STATIC FILE PUT IT IN PUBLIC FOLDER
app.use(express.static("public"));
 
//HOME ROUTE GET REQUESTS
app.get("/", function(req, res) {
 
    const today = date.getDate();

    res.render('list', {h1: today , listItems : items });
});
 
//HOME ROUTE AND WORK ROUTE POST REQUESTS
app.post("/", function(req, res) {
  
  const item = req.body.newItems;
  
  if (req.body.list === 'Work list'){
  workList.push(item);
  res.redirect('/work');  
 } else { 
  items.push(item);
  res.redirect('/');
 }
  });

//WORK ROUTE GET REQUESTS 
  app.get("/work", function(req, res) {
  res.render('list', {h1: "Work list" , listItems : workList });

    });
   
//SET UP EXPRESS SERVER TO LISTEN TO CURRENT PORT
const port = process.env.LOCAL_PORT;
const host = process.env.HOST;

app.listen(process.env.PORT || port, function() {
  console.log(`test app in server ${host}:${port}`);
});