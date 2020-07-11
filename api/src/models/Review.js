Review = (sequelize, S) => {
    // defino el modelo
    const R = sequelize.define(
      "review",
      {
        id: {
          type: S.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        title: {
          type: S.STRING,
          allowNull: false,
        },
        review: {
          type: S.STRING,
          allowNull: false,
        },
        ranking: {
          type: S.INTEGER,
          allowNull: false,
        },
      },
     /* {
        getterMethods: {
          
          getProduct: function () {
            return this.idProduct;
          },
          getUser: function () {
            return this.idUser;
          }
        },
      }*/
    );
    return R;
  };
  
  module.exports = Review;
  