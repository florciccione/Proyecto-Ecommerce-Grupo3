const {Cart} = require('../models');
const express = require('express').Router();

express.get('/', function(req,res){
    Cart.findAll()
    .then(function(cart){
        res.status(200).json(cart);
    })
})