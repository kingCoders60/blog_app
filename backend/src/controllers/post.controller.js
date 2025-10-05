import Post from "../models/post.model.js";

export const createPost = async (req, res) => {
  try {
    const clerkUserId = req.auth.userId;
    const post = new Post({
      ...req.body,
      author: clerkUserId,
    });
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    console.log("Error in createPost →", error.message);
    res.status(500).json({ message: "Error saving post." });
  }
};

export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find(); // Clerk user IDs are strings, no populate
    res.status(200).json({ message: "Posts fetched successfully.", posts });
  } catch (error) {
    console.log("Error in getAllPosts →", error.message);
    res.status(500).json({ message: "Error fetching posts." });
  }
};

export const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found." });
    res.json(post);
  } catch (error) {
    console.log("Error in getPostById →", error.message);
    res.status(500).json({ error: error.message });
  }
};

export const updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found." });

    if (post.author !== req.auth.userId) {
      return res
        .status(403)
        .json({ message: "Unauthorized to update this post." });
    }

    const updated = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({ message: "Post updated.", post: updated });
  } catch (error) {
    console.log("Error in updatePost →", error.message);
    res.status(400).json({ message: "Update failed.", error: error.message });
  }
};

export const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found." });

    if (post.author !== req.auth.userId) {
      return res
        .status(403)
        .json({ message: "Unauthorized to delete this post." });
    }

    await Post.findByIdAndDelete(req.params.id);
    res.status(200).json("Post deleted.");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
