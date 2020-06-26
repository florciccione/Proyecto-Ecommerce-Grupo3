
const {Product, Category} = require('../models');
const {Op} = require("sequelize");
const express = require('express').Router();
//const server = express();


express.get('/', function(req,res){
    Product.findAll({
        include: {
            model: Category,
            as:"categoria",
            attributes: ['name']
        }
    })
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
        keywords:  keywords,
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

  Category.findOne({
        where: {
            id: req.params.category
        }
    })
    .then(function(category){
        Product.findAll({
            where: {
                idCategory: category.id
            }
        })
        .then(function(products){
           res.status(200).json(products);
        })
    })
    .catch(function(err){
        res.status(404).json({err: "No se encontro el id", data: err});
    })
    
})


express.get('/keys/:keywords', function(req,res){
    var keys = req.params.keywords.split("-").join(" ").toLowerCase();
    console.log(keys);
    Product.findAll({
        where:{
            [Op.or]: [
                {
                    keywords: {
                
                    [Op.iLike]: `${keys}`
                     }
                },
                {
                    keywords: {
                        [Op.substring]:  `${keys}`
                    }
                }
            ]
        }
    })
   .then(function(products){
       res.status(200).json(products);
   })
   .catch(function(err){
       res.status(404).json({data: err});
   })
})

express.post('/', function(req, res){
    

})

module.exports = express;