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

const { Product, Category, Colors, stockXColor, User, Cart } = models;

// Add model relationships here
// product has many category

//Product.hasMany(stockXColor);
Product.belongsToMany(Colors, { through: stockXColor });
Colors.belongsToMany(Product, { through: stockXColor });
//stockXColor.belongsTo(Product);
//stockXColor.belongsTo(Colors);
//Product.hasOne(Category);
Category.hasMany(Product, { as: "productos", foreignKey: "idCategory" });
Product.belongsTo(Category, { as: "categoria", foreignKey: "idCategory" });



User.hasOne(Cart, {as: "carrito", foreignKey: "idUsuario"});
Cart.belongsTo(User, {as: "usuario", foreignKey: "idUsuario"});

// NOTA: un carrito tiene muchos productos, y estos pertenecen a varios carritos (hay que hacer otra tabla para relacionar cartXproduct) por las dudas si no lo ves así te explico lo que yo entiendo:
// un usuario guarda en su carrito 1 cuaderno, 1 lapiz y 1 mochila y viene otro usuario y quiere guardar otros productos y además alguno de esos 3 que te menciono, ese producto va a pertencer a 2 carritos a la vez
Cart.belongsToMany(Product, { through: cartXProduct });
Product.belongsToMany(Cart, { through: cartXProduct });

module.exports = models;
