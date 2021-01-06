const Router = require("express").Router;
const UserController = require("../../domain/controllers/UserController");
const TeamsController = require("../../domain/controllers/TeamsController");

const routes = Router();

routes.post("/", UserController.store);
routes.get("/", UserController.index);
routes.get("/:id", UserController.show)
routes.delete("/", UserController.remove);
routes.put("/:id", UserController.update);

routes.post("/teams", TeamsController.store);
routes.get("/teams/:id", TeamsController.savee);

module.exports = routes;
