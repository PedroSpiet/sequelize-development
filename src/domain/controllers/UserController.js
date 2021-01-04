const CreateUserService = require("../services/CreateUserService");
const FindUserService = require("../services/FindUserService");
const IndexUsersService = require("../services/IndexUsersService");
const RemoveUserService = require("../services/RemoveUserService");

class UserController {
  async store(req, res) {
    try {
      const createUser = await CreateUserService.handle(
        req.body.name,
        req.body.email,
        req.body.telephone
      );

      return res.status(200).json(createUser);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async index(req, res) {
    const users = await IndexUsersService.handle();
    return res.status(200).json(users);
  }

  async show(req, res) {
    try {
      const user = await FindUserService.handle(req.params.id);
      return res.status(200).json(user);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async remove(req, res) {
    try {
      const deletedUser = await RemoveUserService.handle(req.body.id);
      return res.status(200).json({ success: deletedUser });
    }catch(err) {
      return res.status(400).json({ error: err.message });
    }
  } 
}

module.exports = new UserController();
