const express = require("express");
const app = express();

app.get("/Home", (req, res) => {
  res.send("Hello World");
});

var listner = app.listen(8080, () => {
  console.log(`Node server running on ${listner.address().port}...`);
});
