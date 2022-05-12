const AuthService = require("../services/auth/AuthService");
const NoteService = require("../services/notes/NoteService");

module.exports = class NoteRoute {
  noteService = new NoteService();
  authService = new AuthService();

  /**
   *
   * @param {import("express").Express} app
   */
  constructor(app) {
    /**
     * GET NOTE
     */
    app.get("/notes/:id", async (req, res) => {
      const isCorrectToken = await this.authService.checkAuthToken(
        req.headers.authorization
      );
      if (!isCorrectToken)
        return res.status(403).send({ message: "Forbidden." });

      const { id } = req.params;
      const note = await this.noteService.getNote(id);
      if (!note)
        return res
          .status(404)
          .send({ message: "Couldn't find note with ID : " + id });
      res.status(200).send(note);
    });

    /**
     * CREATE NOTE
     */
    app.post("/notes/create", async (req, res) => {
      const isCorrectToken = await this.authService.checkAuthToken(
        req.headers.authorization
      );
      if (!isCorrectToken)
        return res.status(403).send({ message: "Forbidden." });

      const { content } = req.body;
      if (!content)
        return res.status(400).send({ message: "Bad body request." });

      const newNote = await this.noteService.createNote({
        email: isCorrectToken.email,
        content,
      });
      res.status(200).send({ message: "OK", data: newNote._id });
    });

    /**
     * UPDATE NOTE
     */
    app.patch("/notes/:id", async (req, res) => {
      const isCorrectToken = await this.authService.checkAuthToken(
        req.headers.authorization
      );
      if (!isCorrectToken)
        return res.status(403).send({ message: "Forbidden." });

      const { content } = req.body;
      if (!content)
        return res.status(400).send({ message: "Bad body request." });

      await this.noteService.updateNote({
        email: isCorrectToken.email,
        content,
      });

      res.status(200).send({ message: "Updated." });
    });
  }
};
