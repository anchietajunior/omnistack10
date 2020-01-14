const express = require("express");

const app = express();

app.get("/", (request, response) => {
  return response.json({ message: "This is web server with Express" });
});

app.listen(3333);
