import express from "express";


import {createComment,getCommentsByPost,deleteComment} from "../controllers/comment.controller.js"

const router = express.Router();

router.post('/',createComment);
router.get('/:postId',getCommentsByPost);
router.delete('/:commentId',deleteComment);

export default router;