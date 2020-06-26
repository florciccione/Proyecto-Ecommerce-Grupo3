const stockXColor = (sequelize, S) =>{

    const M = sequelize.define('stockXColor', {
        id: {
            type: S.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
          },
        cantidad: {
            type: S.INTEGER,
            allowNull: false,
            
        },
        image: {
            type: S.STRING,
            allowNull: false
        },
        
    });

return M;
}

module.exports = stockXColor;