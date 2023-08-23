const express = require("express");
const router = express.Router();

const usersRouter = require("./usersRoute");
router.use("/", usersRouter);

const postsRouter = require("./postsRoute");
router.use("/board", postsRouter);

const likeRouter = require("./likeRoute");
router.use("/like", likeRouter);

module.exports = router;
