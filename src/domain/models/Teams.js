module.exports = (Sequelize, DataTypes) => {
  const teams = Sequelize.define("teams", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
  });

  teams.associate = models => {
    teams.belongsTo(models.users, { foreignKey: 'user_id', as: 'users' });
  }

  return teams;
};
