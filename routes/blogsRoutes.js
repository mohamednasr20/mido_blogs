const express = require("express");
const Blog = require("../models/blog");
const router = express.Router();

router.get("/blogs", (req, res) => {
  Blog.find()
    .then((reuslt) => {
      res.render("index", { title: "all blogs", blogs: reuslt });
    })
    .catch((err) => console.log(err));
});

router.post("/blogs", (req, res) => {
  const blog = new Blog(req.body);

  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create A New Blog" });
});

router.get("/blogs/:id", (req, res) => {
  const id = req.params.id;

  Blog.findById(id).then((result) => {
    res.render("details", { title: "blog-details", blog: result });
  });
});

router.delete("/blogs/:id", (req, res) => {
  const id = req.params.id;

  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/blogs" });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
