const express = require('express').Router();
const {Product} = require('../models/Product.js');
const {Category} = require('../models/Category.js');
//const server = express();


express.get('/product', function(req,res){
    Product.findAll()
    .then(function(products){
        res.send(products);
    })
})
 express.post('/product', function(req,res){
    const {name, description, price} = req.body;
    const newProduct = Product.create({
        name: name,
        description: description,
        price: price
    }, {fields: ['name', 'description', 'price']});
    if(!newProduct){
        var err = new Error("No se creo el producto");
        res.status(404).send(err);
    }
    res.status(200).json({message: "Se creo correctamente el producto", data: newProduct});
}) 
express.get('/:category', function(req,res){

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

express.get('/:keywords', function(req,res){
    var keys = req.body.split(",");
    
})

express.post('/', function(req, res){
    

})

module.exports = express;