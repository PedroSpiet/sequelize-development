const CreateUserService = require("../services/CreateUserService");

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
}

module.exports = new UserController();
