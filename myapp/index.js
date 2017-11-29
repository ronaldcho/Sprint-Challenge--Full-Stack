/* **************************************************************************************
  **************************************************************************************
Setting up a Node development environment
  https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment

 imports the "express" module and uses it to create a server (app) 
 that listens for HTTP requests on port 8000and prints a message to the console explaining what browser URL you can use to test the server.

 **************************************************************************************
  The app.get() function only responds to HTTP GET requests with the specified URL path ('/'), in this case by calling a function to send our Hello World! message. 
 **************************************************************************************
 **************************************************************************************
 **************************************************************************************

*/

const express = require('express');
const app = express();

app.get('/', function(req, res){
  res.send('Hello Word!!!');
})

const port = 8000;  //define the port for server to listen

app.listen(port, function(){
  console.log('Example app listening on port 8000!!!');
})