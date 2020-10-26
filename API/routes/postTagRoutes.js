const express = require("express")
const postTagsController = require("../controllers/postTagsController")
const postTagsRouter = express.Router()

postTagsRouter
  .route("/")
  .get(postTagsController.index)
  .post(postTagsController.save)
  .put(postTagsController.update)

postTagsRouter
  .route("/post_tag/:id")
  .get(postTagsController.getOne)
  .delete(postTagsController.delete)

postTagsRouter.route("/post_tag/post/:id_posts").get(postTagsController.getPostById)

module.exports = postTagsRouter
