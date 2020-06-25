const {Category} = require('../models');
const express = require('express').Router();

express.get('/', function(req,res){
    Category.findAll()
    .then(function(categories){
        res.status(200).json(categories);
    })
})

express.post('/add', function(req,res){
    const {name} = req.body;
    Category.create({
        name: name
    }, {fields: ['name']})
    .then(function(category){
        res.status(200).json({message: "Se creo correctamente la categoria", data: category});
    })
    .catch(function(err){
        res.status(404).json({err: "No se creó la categoria"});
    })
})
 


module.exports = express;