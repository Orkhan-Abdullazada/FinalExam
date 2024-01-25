const Blog = require("../model/blog.model.js");
const BlogController = {
  getAll: async (req, res) => {
    try {
      const target = await Blog.find({});
      res.send(target);
    } catch (error) {
      res.send("error");
    }
  },
  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const target = await Blog.findGetById(id);
      res.send(target);
    } catch (error) {
      res.send("error");
    }
  },
  post: async (req, res) => {
    try {
      const { image, name, price } = req.body;
      const NewBlog = new Blog({
        name:req.body.name,
        price:req.body.price,
        image:req.body.image
      });
      await NewBlog.save();
      res.send(NewBlog);
    } catch (error) {
      res.send("error");
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      await Blog.findGetByIdAndDelete(id);
      res.params("actived delete");
    } catch (error) {
      res.send("error");
    }
  },
};
module.exports = BlogController;
