

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
      
    },
    description: {
      type: S.STRING,
      allowNull: false,
     
    },
    price: {
      type: S.INTEGER,
      allowNull: false,
     
    },
    keywords: {
      type: S.STRING,
      allowNull: true,
      
    }
   
  });
  
  return P;
};

module.exports = Product;
