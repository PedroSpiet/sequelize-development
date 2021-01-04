const Router = require("express").Router;
const UserController = require("../../domain/controllers/UserController");

const routes = Router();

routes.post("/", UserController.store);
routes.get("/", UserController.index);
routes.get("/:id", UserController.show);
routes.delete("/", UserController.remove);

module.exports = routes;
