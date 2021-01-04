const { users } = require("../../models/index.js");

class FindUserByEmail {
  async handle(email) {
    const user = await users.findOne({ where: { email: email } });
    return user;
  }
}

module.exports = new FindUserByEmail();
