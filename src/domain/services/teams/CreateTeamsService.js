const { teams } = require("../../models");
const FindUserService = require("../users/FindUserService");

class CreateTeamsService {
  async handle(user_id, name) {
    const verifyUser = await FindUserService.handle(user_id);

    if (!verifyUser) {
      throw new Error("User Doenst Exist!");
    }

    if (!name) {
      throw new Error("name not passed!");
    }

    const team = await teams.create({
      name: name,
      user_id: user_id,
    });

    return team;
  }
}

module.exports = new CreateTeamsService();
