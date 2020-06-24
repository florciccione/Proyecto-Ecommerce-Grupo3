const express = require('express');
const product = require('./models/Product.js');
const server = express();


server.get('/', function(req,res){

})

server.post('/product', function(req, res){


    res.status(200).json();
})