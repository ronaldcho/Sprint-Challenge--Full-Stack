const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const Accounts = require('./accountModel.js');

//create the server (app)
const server = express();

server.use(bodyParser.json());

//create account on server side using post method
server.post('/accounts', function(req, res){
  const newAccount = new Accounts(req.body);

  newAccount.save(function(req, account){
    if(err){
      res.status(422).json( { error: "count not create the account"})
    } else {
      res.status(201).json(account);
    }
  })
});

//get account data from the server
server.get('/accounts', function(req, res){
  Accounts.find({}, function(err, account){
    if(err){
      //handle error
    } else {
      res.status(200).json(account);
    }
  })
});

//connection to mongoDB using connect
mongoose.Promise = global.Promise;
const connect = mongoose.connect(
  'mongodb://localhost/accounts',
  {useMongoClient: true}
);


connect.then(() => {
  //define the port number for server to listening
  const port = 8080;
  server.listen(port);
    console.log(`Server is listening on port ${port} now!!!`);
  },
  (err) => {
    console.log('ERROR: COULD NOT CONNECT TO mongoDB!!!')
  }
);

