const NoteModel = require("../../models/Note");
const { ObjectID } = require("bson");

module.exports = class NoteService {
  noteModel = NoteModel;

  constructor() {}

  /**
   * @param {id} id
   */
  async getNote(_id) {
    const data = await this.noteModel.findOne(
      { _id: new ObjectID(_id) },
      { __v: 0 }
    );
    return data ? data : null;
  }

  /**
   *
   * @param {{
   *   email: string;
   *   content: string;
   *   name: string;
   * }} body
   */
  async createNote(body) {
    const newNote = await this.noteModel.create({
      content: body.content,
      email: body.email,
      createdAt: new Date().toISOString(),
      name: body.name,
    });

    return newNote;
  }

  /**
   *
   * @param {{
   *   email: string,
   *   content: string
   * }} body
   */
  async updateNote(body) {
    await this.noteModel.updateOne(
      { email: body.email },
      {
        $set: { content: body.content },
      }
    );

    return "OK";
  }

  async getUserNotes(email) {
    const data = await this.noteModel.find(
      { email: `${email}` },
      { __v: 0, email: 0, content: 0, createdAt: 0 }
    );

    return data ? data : false;
  }
};
