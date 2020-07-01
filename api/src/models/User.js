User = (sequelize, S) => {
    const U = sequelize.define("user", {
      id: {
        type: S.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: S.STRING,
        allowNull: false,
      },
      email: {
        type: S.STRING,
        allowNull: false,
      },
      password: {
        type: S.INTEGER,
        allowNull: false,
      },
      adress: {
        type: S.STRING,
        allowNull: true,
      }
    });
  
    return U;
};
  
module.exports = User;