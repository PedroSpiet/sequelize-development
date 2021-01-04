const { users } = require('../models');
const FindUserService = require('./FindUserService');

class RemoveUserService {
  async handle(id) {
    if (!id) {
      throw new Error('id not provided!');
    }

    const verifyUser = await await FindUserService.handle(id);
    if (!verifyUser) {
      throw new Error('User doenst exist!');
    }

    await users.destroy(
      {
        where: { id: id }
      }
    );

    return `Usuario deletado com sucesso!`;
  }
}

module.exports = new RemoveUserService();