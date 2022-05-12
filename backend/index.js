const express = require("express");
const http = require("http");
const cors = require("cors");
const morgan = require("morgan");
const { default: mongoose } = require("mongoose");
const NoteRoute = require("./routes/NoteRoute");
const chalk = require("chalk");

const PORT = process.env.PORT || 4000;

const app = express();
const server = http.createServer(app);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log(chalk.green.bold("Connected to MongoDB")));

app.use(express.json());
app.use(cors({ origin: process.env.CORS_ALLOWED_ORIGIN }));
app.use(morgan("dev"));

/**
 * LOAD ROUTES
 */
new NoteRoute(app);

server.listen(4000, () => console.log("Listening on PORT : " + PORT));
