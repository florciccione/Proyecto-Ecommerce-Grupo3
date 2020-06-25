const server = require('express').Router();

server.post('/changepassword');

/* server.get('/product', function(req,res){
    console.log("Si entro aqui");
    Product.findAll()
    .then(function(product){
        res.render('Product', {product});
    })
}) */

server.post('/login');

server.get('/logout');

server.post('/register');

server.get('/me');

server.put('/promote');

module.exports = server;
