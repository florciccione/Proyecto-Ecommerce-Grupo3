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
            
        },
        cantidad: {
            type: S.INTEGER,
            allowNull: false,
            
        },
        idProducto:{
            type: S.INTEGER,
            allowNull: false,
            
        }
    });

return M;
}

module.exports = stockXColor;