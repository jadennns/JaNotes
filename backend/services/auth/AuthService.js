const AccountTokenModel = require("../../models/AccountToken");

module.exports = class AuthService {
  authModel = {
    tokens: AccountTokenModel,
  };

  /**
   * @param {string} token
   * @returns {Promise<{ token: string, email: string } | boolean>}
   */
  async checkAuthToken(token) {
    const data = await this.authModel.tokens.findOne({ token });
    return data ? data : false;
  }

  /**
   * @param {string} email
   * @returns {Promise<string | boolean>}
   */
  async findAuthToken(email) {
    const data = await AccountTokenModel.findOne({ email });
    return data ? data.token : false;
  }
};
