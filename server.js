const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const knex = require("knex");
const bcrypt = require("bcrypt-nodejs");
const image = require("./controllers/image");
const register = require("./controllers/register");
const profile = require("./controllers/profile");
const signin = require("./controllers/signin");

const app = express();
app.use(bodyParser.json());
app.use(cors());
const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    port: "3002",
    user: "postgres",
    password: "omri1990",
    database: "postgres"
  }
});

app.post("/image", (req, res) => image.handleClarifaiApi(req, res));
app.post("/register", (req, res) =>
  register.handleRegister(req, res, db, bcrypt)
);
app.get("/profile/:id", (req, res) =>
  profile.handleProfileGet(req, res, db, bcrypt)
);
app.post("/signin", (req, res) => signin.handleSignin(req, res, db, bcrypt));

app.listen(3000, () => console.log("server listen..."));
