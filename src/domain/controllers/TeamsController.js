const CreateTeamsService = require("../services/teams/CreateTeamsService");
const FindTeamsService = require("../services/teams/FindTeamService");

class TeamsController {
  async store(req, res) {
    try {
      const createdTeam = await CreateTeamsService.handle(
        req.body.user_id,
        req.body.name
      );
      return res.status(200).json(createdTeam);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async savee(req, res) {
    try {
      const team = await FindTeamsService.handle(req.params.id);
      return res.status(200).json(team);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new TeamsController();
