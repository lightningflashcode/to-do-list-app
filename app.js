// jshint esversion:6
// jshint esversion:8
 
// IMPORTING MODULES
const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

// READING ENVIRONMENT VARIABLES
const dotenv = require("dotenv").config();
// .config({path: path.join(__dirname, '.env')});or use this

 
 // INITIALISE THE EXPRESS APP AND EJS
const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use("view engine", 'ejs');


// IF THERE IS ANY STATIC FILE PUT IT IN PUBLIC FOLDER
app.use(express.static("public"));
 
//HOME ROUTE GET REQUESTS
app.get("/", function(req, res) {
 
    let today = new Date();

    var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  
    var day=days[today.getDay()];
    
  res.render('list', {kindofday: day});
    
    // variable day = array dari variable days dimana fungsi / method getday === hari dari 0-6
    // see mdn doc or w3s tentang metod getday / new date() jadi saturday = 7 jika dimulai dari 1
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