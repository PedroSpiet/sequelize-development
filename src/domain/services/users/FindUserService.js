const { users } = require('../../models');

class FindUserService {
  async handle(id) {
    if (!id) {
      throw new Error('Id not passed');
    }

    const user = await users.findByPk(id);

    if (!user) {
      throw new Error('User not found!');
    }

    return user;
  }
}

module.exports = new FindUserService();