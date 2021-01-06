module.exports = (Sequelize, DataTypes) => {
  const user = Sequelize.define("users", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    telephone: DataTypes.INTEGER,
  });

  user.associate = (models) => {
    user.hasMany(models.teams);
  };
  
  return user;
};
