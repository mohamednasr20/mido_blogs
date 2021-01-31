const express = require("express");
const mongoose = require("mongoose");
const Blog = require("./models/blog");
const dbURI = require("./dbURI");

const app = express();

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blogs", (req, res) => {
  Blog.find()
    .then((reuslt) => {
      res.render("index", { title: "all blogs", blogs: reuslt });
    })
    .catch((err) => console.log(err));
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create A New Blog" });
});
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
