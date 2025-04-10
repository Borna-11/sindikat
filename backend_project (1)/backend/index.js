const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Pozdrav sa backenda!");
});

app.listen(port, () => {
  console.log(`Server je pokrenut na http://localhost:${port}`);
});