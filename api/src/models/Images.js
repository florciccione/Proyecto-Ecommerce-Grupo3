const Images = (sequelize, S) => {
 
    const I = sequelize.define('images', {
        id: {
            type: S.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        url: {
            type: S.STRING,
            allowNull: false,
           
        },
        main: {
            type: S.BOOLEAN,
            allowNull: false,
            
        },
        idProducto: {
            type: S.INTEGER,
            allowNull: false,
            
        }
    });
    return I;
}

module.exports = Images;