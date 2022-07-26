const express = require("express");
const app = express();
const path = require("path");
const redditData = require("./data.json");

// SERVING STATIC FILES
app.use(express.static(path.join(__dirname, "/public")));

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

// LOOPS IN TEMPLATE
app.get("/cats", (req, res) => {
  const cats = ["Redi", "Bati", "Rysio", "Cookie", "Winston"];
  res.render("cats", { cats });
});

// SUBREDDITS DEMO, COLLECTING DATA FROM JSON AND PARSING IT TO THE EJS PAGE
app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  const data = redditData[subreddit];
  if (data) {
    res.render("subreddit", { ...data });
  } else {
    res.render("notfound", { subreddit });
  }
});

// IF STATEMENTS, PARSING DATA
app.get("/random", (req, res) => {
  const num = Math.floor(Math.random() * 10) + 1;
  res.render("random", { num });
});

app.listen(3000, () => {
  console.log("LISTENING ON PORT 3000");
});
