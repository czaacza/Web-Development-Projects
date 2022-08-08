const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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
