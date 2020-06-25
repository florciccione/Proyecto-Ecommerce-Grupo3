

const Product = (sequelize, S) => {
  // defino el modelo
  const P = sequelize.define('product', {
    id: {
      type: S.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
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
    idCategory:{
      type: S.STRING,
      allowNull: false,
      validate: {noEmpty: true}
    },
    keywords: {
      type: S.STRING,
      allowNull: true,
      validate: {noEmpty: true}
    },
    createdAt:{
      type: S.DATE,
      allowNull: false,
      defaultValue: S.NOW
    },
    updatedAt:{
      type: S.DATE,
      allowNull: false,
      defaultValue: S.NOW
    }
  });
  
  return P;
};

module.exports = Product;
