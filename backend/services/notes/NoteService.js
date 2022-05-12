const NoteModel = require("../../models/Note");

module.exports = class NoteService {
  noteModel = NoteModel;

  constructor() {}

  /**
   * @param {id} id
   */
  async getNote(_id) {
    const data = await this.noteModel.findOne({ _id }, { __v: 0 });
    return data ? data : null;
  }

  /**
   *
   * @param {{
   *   email: string,
   *   content: string
   * }} body
   */
  async createNote(body) {
    const newNote = await this.noteModel.create({
      content: body.content,
      email: body.email,
      createdAt: new Date().toISOString(),
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
};
