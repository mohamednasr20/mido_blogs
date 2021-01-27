const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.listen(3000);

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
