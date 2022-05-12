const AccountTokenModel = require("../../models/AccountToken");

module.exports = class AuthService {
  authModel = {
    tokens: AccountTokenModel,
  };

  /**
   * @param {string} token
   */
  async checkAuthToken(token) {
    const data = await this.authModel.tokens.findOne({ token });
    return data ? data : false;
  }
};
