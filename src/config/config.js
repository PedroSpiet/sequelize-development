module.exports = {
  dialect: "mysql",
  port: 3306,
  host: "localhost",
  username: "root",
  password: "docker",
  database: "sequelize",
  define: {
    "timestamps": true,
    underscored: true,
    underscoredAll: true
  }
}