const express = require("express");
const app = express();

// app.use((req, res) => {
//   console.log("we got a new request!!");
//   // res.send("hello, we got your request! This is a response!!");
//   // res.send({ color: "red" });
//   res.send("<h1>This is my response!</h1>");
// });

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  res.send(`Browsing the ${subreddit} subreddit`);
});

app.get("/r/:subreddit/:postId", (req, res) => {
  const { subreddit, postId } = req.params;
  res.send(`Viewing Post ID: ${postId} on the ${subreddit} subreddit`);
});

// //////////////
// QUERY STRINGS
// //////////////

app.get("/search", (req, res) => {
  console.log(req.query);
  const { q } = req.query;
  if (!q) {
    res.send("<h1> nothing found if nothing searched..</h1> ");
  }
  res.send(`<h1> Search results for ${q} </h1>`);
});

// //////////////
// REQUESTS
// //////////////

app.get("/cats", (req, res) => {
  res.send("MEOW!!!");
});

app.post("/cats", (req, res) => {
  res.send("POST REQUEST TO /cats!!!!");
});

app.get("/dogs", (req, res) => {
  res.send("WOOOF!!!");
});

app.get("/", (req, res) => {
  res.send("THIS IS THE HOME PAGE!!!");
});

// MUST BE THE LAST OF ALL app.get()
app.get("*", (req, res) => {
  res.send("I don't know that path..");
});

// cats => 'meow'
// dogs => 'woof'
// '/'

app.listen(3000, () => {
  console.log("listening on port 3000");
});
