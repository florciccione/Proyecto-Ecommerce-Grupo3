const Colors = (sequalize, S) =>{

    const M = sequelize.define('color', {
        id: {
            type: S.INTEGER,
            allowNull: false,
            autoIncrement: true,
          },
        name: {
            type: S.STRING,
            allowNull: false,
            validate: {noEmpty: true}
        },
        hexaColor: {
            type: S.STRING,
            allowNull: false,
            validate: {noEmpty: true}
        },
    }),

return M;
}

module.exports = Colors;