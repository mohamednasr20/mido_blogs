const express = require("express");
const mongoose = require("mongoose");

const app = express();

const dbURI =
  "mongodb+srv://mohamednasr86:m4102005m@cluster0.cfnr6.mongodb.net/node-tuts?retryWrites=true&w=majority";

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  const blogs = [
    {
      title: "yoshi finds eggs",
      snippet:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, ipsum",
    },
    {
      title: "mario finds stars",
      snippet:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, ipsum",
    },
    {
      title: "how to defeat bowser",
      snippet:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, ipsum",
    },
  ];
  res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create A New Blog" });
});

// app.get("/about-me", (req, res) => {
//   res.redirect("/about");
// });

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
