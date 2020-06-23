const Product = (sequelize, S) => {
  // defino el modelo
  const P = sequelize.define('product', {
    id: {
      type: S.INTEGER,
      allowNull: false,
      autoIncrement: true,
    },
    name:{
      type: S.STRING,
      allowNull: false,
      validate: {noEmpty: true}
    },
    description: {
      type: S.STRING,
      allowNull: false,
      validate: {noEmpty: true}
    },
    price: {
      type: S.INTEGER,
      allowNull: false,
      validate: {noEmpty: true}
    },
    idColor:{
      type: S.INTEGER,
      allowNull: false,
      autoIncrement: true
    },
    image:{
      type: S.STRING,
      allowNull: false,
    },
    idCategory:{
    type: S.INTEGER,
    allowNull: false,
    autoIncrement: true,
    },
    keywords: {
      type: S.STRING,
      allowNull: false,
      validate: {noEmpty: true}
    }
  });
  
  return P;
};

module.exports = Product;
