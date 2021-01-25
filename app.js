// jshint esversion:6
// jshint esversion:8
 
// IMPORTING MODULES
const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

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

var items = ['Pray','Drink Water', 'Make bedroom','morning worship'];

// IF THERE IS ANY STATIC FILE PUT IT IN PUBLIC FOLDER
app.use(express.static("public"));
 
//HOME ROUTE GET REQUESTS
app.get("/", function(req, res) {
 
    const today = new Date();

    // var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  
    // var day=days[today.getDay()]; we will make a better function it is toLocaleDateString

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    const day = today.toLocaleDateString('en-EN',options);
    // const day = today.toLocaleDateString('id-ID',options); untuk bahasa indonesia
    
  res.render('list', {kindofday: day , listItems : items });
    
    // variable day = array dari variable days dimana fungsi / method getday === hari dari 0-6
    // see mdn doc or w3s tentang metod getday / new date() jadi saturday = 7 jika dimulai dari 1
});
 
//HOME ROUTE POST REQUESTS
app.post("/", function(req, res) {
  
  var item = req.body.newItems;
  items.push(item);

  res.redirect('/');

  });
 
//SET UP EXPRESS SERVER TO LISTEN TO CURRENT PORT
const port = process.env.LOCAL_PORT;
const host = process.env.HOST;

app.listen(process.env.PORT || port, function() {
  console.log(`test app in server ${host}:${port}`);
});