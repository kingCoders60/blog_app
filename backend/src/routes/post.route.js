import express from "express";

import {createPost,getAllPosts,getPostById,updatePost,deletePost} from "../controllers/post.controller.js"
import {requireAuth} from "../middlewares/clerkAuth.js"

const router = express.Router();

router.post('/',requireAuth,createPost);
router.get('/',getAllPosts);
router.get('/:id',getPostById);
router.put('/:id',updatePost);
router.delete('/:id',requireAuth,deletePost);

export default router;