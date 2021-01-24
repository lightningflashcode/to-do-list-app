// initiating npm module

const express = require ('express');
const dotenv = require ('dotenv').config;
const bodyParser = require ('body-parser');
const ejs = require ('ejs');

// initiating express and body parser app

const app = express();

app.use(bodyParser(urlencoded{extended : true}));

// set home route app

app.get('/', function (req , res) {
 res.sendFile(__dirname + 'index.html');

});

// set listening to server port

const port = 4000;
// port = 4000 or process.env.LOCALPORT


app.listen(process.env.PORT||port, ()=>{
console.log("server is connected to " , port)
});