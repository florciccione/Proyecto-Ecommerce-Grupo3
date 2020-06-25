const stockXColor = (sequelize, S) =>{

    const M = sequelize.define('stockXColor', {
        id: {
            type: S.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
          },
        idColor: {
            type: S.INTEGER,
            allowNull: false,
            validate: {noEmpty: true}
        },
        cantidad: {
            type: S.INTEGER,
            allowNull: false,
            validate: {noEmpty: true}
        },
        idProducto:{
            type: S.INTEGER,
            allowNull: false,
            validate: {noEmpty: true},
        }
    });

return M;
}

module.exports = stockXColor;