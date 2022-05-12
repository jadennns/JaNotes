const { default: mongoose, mongo } = require("mongoose");

const AccountTokenSchema = new mongoose.Schema({
  email: String,
  token: String,
});

const AccountTokenModel = mongoose.model(
  "user_tokens",
  AccountTokenSchema,
  "user_tokens"
);

module.exports = AccountTokenModel;
