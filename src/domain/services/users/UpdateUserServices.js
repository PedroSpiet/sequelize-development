const { users } = require("../../models/");
const FindUserService = require("./FindUserService");

class UpdateUserService {
  async handle(id, name, email, telephone) {
    if (!id) {
      throw new Error("id not provided!");
    }

    const verifyUser = await FindUserService.handle(id);
    if (!verifyUser) {
      throw new Error("User doenst exist!");
    }

    const userUpdated = await verifyUser.update({
      name: name,
      email: email,
      telephone: telephone,
    });
    return userUpdated;
  }
}

module.exports = new UpdateUserService();
