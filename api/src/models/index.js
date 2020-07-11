const fs = require("fs");
const path = require("path");
const db = require("../db.js");
const { userInfo } = require("os");
/* const {Product, Colors, Category} = require ('models'); */

const basename = path.basename(__filename);
const models = {};

models.conn = db();

fs.readdirSync(__dirname)
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    const model = models.conn.import(path.join(__dirname, file));
    const name = file.split(".")[0];
    models[name] = model;
  });

const {
  Product,
  Category,
  Colors,
  stockXColor,
  User,
  Orden,
  lineaDeOrden,
  Review
} = models;

// Add model relationships here
// product has many category

//Product.hasMany(stockXColor);
Product.belongsToMany(Colors, { through: stockXColor, onUpdate: "cascade" });
Colors.belongsToMany(Product, { through: stockXColor });
//stockXColor.belongsTo(Product);
//stockXColor.belongsTo(Colors);
//Product.hasOne(Category);
Category.hasMany(Product, {
  as: "productos",
  foreignKey: "idCategory",
});
Product.belongsTo(Category, { as: "categoria", foreignKey: "idCategory" });

          User.hasMany(Review, { as: "reviews", foreignKey: "idUsuario" }); 
          Review.belongsTo(User, { as: "usuario", foreignKey: "idUsuario" }); 
          Product.hasMany(Review, { as: "reviews", foreignKey: "idProduct" }); 

// Orden.hasMany(User, { as: "usuarios", foreignKey: "idOrden" });
// User.belongsTo(Orden, { as: "orden", foreignKey: "idOrden" });
User.hasMany(Orden, { as: "ordenes", foreignKey: "idUsuario" }); 
Orden.belongsTo(User, { as: "usuario", foreignKey: "idUsuario", onDelete: "cascade" });

Product.belongsToMany(Orden, { through: lineaDeOrden });
Orden.belongsToMany(Product, { through: lineaDeOrden });
          
module.exports = models;
