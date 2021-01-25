// initiating npm module

const express = require ('express');
const dotenv = require ('dotenv').config;
const bodyParser = require ('body-parser');
const ejs = require ('ejs');

// initiating express and body parser app and ejs

const app = express();

app.use("view engine", 'ejs');

app.use(bodyParser.urlencoded({extended : true}));

// set home route app

app.get('/', function (req , res) {
 
let today = new Date();

  var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  var day=days[today.getDay()];
  
res.render('list', {kindofday: day});
  
  // variable day = array dari variable days dimana fungsi / method getday === hari dari 0-6
  // lihat documentasi mdn atau w3s tentang metod getday / new date() jadi saturday = 7 jika dimulai dari 1

  


});

// set listening to server port

const port = 4000;
// port = 4000 or process.env.LOCALPORT


app.listen(process.env.PORT||port, ()=>{
console.log("server is connected to " , port)
});