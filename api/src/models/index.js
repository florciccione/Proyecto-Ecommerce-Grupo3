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
  stockXColor,
} = models;

// Add model relationships here
// product has many category
stockXColor.belongsTo(Product);
stockXColor.belongsTo(Colors);
Product.hasMany(stockXColor);
//Product.belongsToMany(Colors, {through: 'stockXColor'});
//Colors.belongsToMany(Product, {through: 'stockXColor'});
//Product.hasOne(Category);
Category.hasMany(Product, {as: "productos", foreignKey: "idCategory"});
Product.belongsTo(Category, {as: "categoria", foreignKey: "idCategory"});

module.exports = models;
