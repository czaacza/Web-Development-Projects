const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const comments = [
  {
    username: "Todd",
    comment: "lol that is so funny!",
  },

  {
    username: "Skyler",
    comment: "I like to go birdwatching with my dog",
  },

  {
    username: "Sk8erBoi",
    comment: "Plz delete your account, Todd",
  },

  {
    username: "onlysayswoof",
    comment: "woof woof woof",
  },
];

app.get("/comments", (req, res) => {
  res.render("comments/index", { comments });
});

app.get("/comments/new", (req, res) => {
  res.render("comments/new");
});

app.post("/comments", (req, res) => {
  const { username, comment } = req.body;
  comments.push({
    username,
    comment,
  });
  res.send("it worked");
});

///////////////////////
// POST REQUESTS INTRO
///////////////////////

app.get("/tacos", (req, res) => {
  res.send("GET /tacos RESPONSE");
});

app.post("/tacos", (req, res) => {
  const { qty, meat } = req.body;
  res.send(`OK, here are your ${qty} ${meat} tacos`);
});

app.listen("3000", () => {
  console.log("LISTENING ON PORT 3000");
});

/*
  GET /comments - list all comments
  POST /comments - create a new comment
  GET /comments/:id - get one comment (using ID)
  PATCH /comments/:id - update one comment
  DELETE /comments/:id - destroy one comment
*/
