const { default: mongoose } = require("mongoose");

const NoteSchema = mongoose.Schema({
  content: String,
  email: String,
  createdAt: String,
  name: String,
});

const NoteModel = mongoose.model("notes", NoteSchema, "notes");
module.exports = NoteModel;
