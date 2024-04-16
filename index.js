const path = require("path");
const express = require("express");

const app = express();

const PORT = 8003;

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(PORT, () => {
  console.log(`Server is starting at port: ${PORT}`);
});
