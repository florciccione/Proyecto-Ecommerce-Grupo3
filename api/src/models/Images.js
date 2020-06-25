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
            validate: {noEmpty: true},
        },
        main: {
            type: S.BOOLEAN,
            allowNull: false,
            validate: {noEmpty: true},
        },
        idProducto: {
            type: S.INTEGER,
            allowNull: false,
            validate: {noEmpty: true}
        }
    });
    return I;
}

module.exports = Images;