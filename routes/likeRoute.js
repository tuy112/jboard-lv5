const express = require("express");
const { Posts } = require("../models");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

// 게시글 좋아요
router.post("/posts/:postId/like", authMiddleware, async (req, res) => {});

// 게시글 좋아요 조회
router.get("/posts/like", authMiddleware, async (req, res) => {});

module.exports = router;