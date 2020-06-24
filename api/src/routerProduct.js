const express = require('express');
const Product = require('./models/Product.js');
const Category = require('./models/Category.js');
const server = express();


server.get('/', function(req,res){
    Product.findAll()
    .then(function(catalogo){
        res.render('catalogo', {catalogo});
    })
})
server.get('/:category', function(req,res){

  var category =  Category.findOne({
        where: {
            name: req.params.category
        }
    })
    console.log(category);
    Product.findAll({
        where: {
            idCategory: category.id
        }
    })
    .then(function(catalogo){
        res.render('catalogo', {catalogo});
    })
    
})

server.get('/:keywords', function(req,res){
    
})

server.post('/', function(req, res){
    

})