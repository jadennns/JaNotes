const AuthService = require("../services/auth/AuthService");

module.exports = class AuthRoute {
  authService = new AuthService();

  /**
   *
   * @param {import("express").Express} app
   */
  constructor(app) {}
};
