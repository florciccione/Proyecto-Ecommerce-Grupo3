const {User} = require('../models');
const express = require('express').Router();

express.get('/', function(req,res){
    User.findAll()
    .then(function(users){
        res.status(200).json(users);
    })
    .catch(function (reason) {
        res
        .status(404)
        .json({ message: "No se obtuvieron los usuarios", data: reason });
    });
})

module.exports = express;