const express = require("express");
const {
  getUser,
  updateUser,
  friendRequest,
  getFriendRequest,
  acceptRequest,
  profileViews,
  suggestedFriends,
} = require("../../controllers/user");
const authMiddleware = require("../../middleware/authMiddleware");
const router = express.Router();

router.post("/user/:id?", authMiddleware, getUser);
router.put("/update", authMiddleware, updateUser);
// friend request
router.post("/friend-request", authMiddleware, friendRequest);
router.post("/get-friend-request", authMiddleware, getFriendRequest);

// accept / deny friend request
router.post("/accept-request", authMiddleware, acceptRequest);

// view profile
router.post("/profile-view", authMiddleware, profileViews);

//suggested friends
router.post("/suggested-friends", authMiddleware, suggestedFriends);

module.exports = router;
