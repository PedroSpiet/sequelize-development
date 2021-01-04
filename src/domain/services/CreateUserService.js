const { users } = require('../models/index');
const FindUserByEmail = require('./FindUserByEmail');

class CreateUserService {
  async handle(name, email, telephone) {
    const verifyEmail = await FindUserByEmail.handle(email);

    if (verifyEmail) {
      throw new Error('That email already exist');
    }

    const userCreated = await users.create({
      name,
      email,
      telephone
    });
    
    return userCreated;
  }
  
}

module.exports = new CreateUserService();