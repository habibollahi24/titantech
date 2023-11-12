const express = require("express");
const {
  createPost,
  getPosts,
  getPost,
  getUserPost,
  getComments,
  likePost,
  likePostComment,
  commentPost,
  replyPostComment,
  deletePost,
} = require("../../controllers/post");
const authMiddleware = require("../../middleware/authMiddleware");
const router = express.Router();

// crete post
router.post("/create-post", authMiddleware, createPost);
// get posts
router.get("/", authMiddleware, getPosts);
router.get("/:id", authMiddleware, getPost);

router.post("/get-user-post/:id", authMiddleware, getUserPost);

// get comments
router.get("/comments/:postId", authMiddleware, getComments);

//like and comment on posts
router.post("/like/:id", authMiddleware, likePost);
router.post("/like-comment/:id/:rid?", authMiddleware, likePostComment);
router.post("/comment/:id", authMiddleware, commentPost); //comment on post
router.post("/reply-comment/:id", authMiddleware, replyPostComment);

//delete post
router.delete("/:id", authMiddleware, deletePost);

module.exports = router;
