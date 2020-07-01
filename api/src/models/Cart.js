Cart = (sequelize, S) => {
    const C = sequelize.define("cart", {
      id: {
        type: S.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      idProducto: {
        type: S.INTEGER,
        allowNull: false,
      },
      cantidad: {
        type: S.INTEGER,
        allowNull: false,
      }
    });
  
    return C;
};
  
module.exports = Cart;