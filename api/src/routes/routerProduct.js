
const {Product, Category} = require('../models');
const express = require('express').Router();
//const server = express();


express.get('/', function(req,res){
    Product.findAll()
    .then(function(catalogo){
        res.status(200).json(catalogo);
    })
})
 express.post('/add', function(req,res){
    const {name, description, price, idCategory, keywords} = req.body;
     Product.create({
        name: name,
        description: description,
        price: price,
        idCategory: idCategory,
        keywords: keywords,
    }, {fields: ['name', 'description', 'price', 'idCategory', 'keywords']})

    .then(function(product){
        res.status(200).json({message: "Se creo correctamente el producto", data: product});
    })
    .catch(function(err){
        res.status(404).json({err: "No se creó el producto"});
    })
        
    
    /* if(!newProduct){
        var err = new Error("No se creo el producto");
      return  res.status(404).send(err);
    } */
   
})
express.post('/modify', function(req,res){
    Product.findOne({
        where: {
           id: req.body.id 
        }
    })
    .then(function(product){
        if(product){
        var newProducto={
            name: product.name,
        description: product.description,
        price: product.price,
        idCategory: product.idCategory,
        keywords: product.keywords,
        
        }
        return product.update(newProducto);
        }
    })
    .catch()
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


/* express.get('/:keywords', function(req,res){
    var keys = req.body.split(",");
    Product.findAll({
        where:{
            keywords: 
        }
    })
}) */

express.post('/', function(req, res){
    

})

module.exports = express;