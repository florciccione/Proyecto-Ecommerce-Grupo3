const fs = require('fs');
const path = require('path');
const db = require('../db.js');
/* const {Product, Colors, Category} = require ('models'); */

const basename = path.basename(__filename);
const models = {};

models.conn = db();

fs.readdirSync(__dirname)
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = models.conn.import(path.join(__dirname, file));
    const name = file.split('.')[0];
    models[name] = model;
  });

const {
  Product,
  Category,
  Colors,
  Images,
  stockXColor,
} = models;

// Add model relationships here
// product has many category
Product.belongsToMany(Colors, {through: 'stockXColor'});
Colors.belongsToMany(Product, {through: 'stockXColor'});
//Product.hasOne(Category);
Category.hasMany(Product, {as: "productos", foreignKey: "idCategory"});
Product.hasMany(Images, {as: "imagenes", foreignKey: "productId"});
Images.belongsTo(Product, {as: "product"});
Colors.hasMany(Images, {as: "imagen", foreignKey: "colorId"});
Images.belongsTo(Colors, {as: "color"});

module.exports = models;
