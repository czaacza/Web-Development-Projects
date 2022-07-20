const express = require("express");
const app = express();

// app.use((req, res) => {
//   console.log("we got a new request!!");
//   // res.send("hello, we got your request! This is a response!!");
//   // res.send({ color: "red" });
//   res.send("<h1>This is my response!</h1>");
// });

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
