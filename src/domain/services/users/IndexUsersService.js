const { users } = require('../../models');

class IndexUsersService {
  async handle() {
    const response = await users.findAll();
    return response;
  }
}

module.exports = new IndexUsersService();