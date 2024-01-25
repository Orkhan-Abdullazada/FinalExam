const express = require("express");
const router = express.Router();
const BlogController = require("../controller/blog.controller.js");
router.get("/", BlogController.getAll);
router.get("/:id", BlogController.getById);
router.post("/", BlogController.post);
router.delete("/:id", BlogController.delete);
module.exports = router;
