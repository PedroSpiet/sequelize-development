const Router = require("express").Router;
const UserController = require("../../domain/controllers/UserController");

const routes = Router();

routes.post("/", UserController.store);

module.exports = routes;
