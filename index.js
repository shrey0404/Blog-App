const path = require("path");
const express = require("express");
const mongoose = require("mongoose");

//Routes -->
const userRoute = require("./routes/user.routes");

//Connect mongodb -->
mongoose.connect("mongodb://localhost:27017/blogify").then((e) => {
  console.log("MongoDb connected successfully!!");
});

const app = express();

app.use(express.urlencoded({ extended: true }));

const PORT = 8003;

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server is starting at port: ${PORT}`);
});
