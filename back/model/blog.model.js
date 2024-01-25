const mongoose = require("mongoose");
const Blog = mongoose.model(
  "Blog",
  new mongoose.Schema({
    name: String,
    image: String,
    price: Number,
  })
);
module.exports = Blog;
