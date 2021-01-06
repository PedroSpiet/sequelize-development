const { teams } = require("../../models");
const {users} = require("../../models/Users");

class FindTeamService {
  async handle(id) {
    if (!id) {
      throw new Error("Id not passed");
    }

    const team = await teams.findOne({
      where: { id: id },
      include: 'users'
    });

    if (!team) {
      throw new Error("Team not found");
    }

    return team;
  }
}

module.exports = new FindTeamService();
