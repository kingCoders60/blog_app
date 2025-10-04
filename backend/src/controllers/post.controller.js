import Post from "../models/post.model.js"

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
    console.log("Error in createPost in post.controller →", error.message);
    res.status(500).json({
      message: "Some error occurred while saving post.",
    });
  }
};

export const getAllPosts = async(req,res)=>{
    try {
        const posts = await Post.find().populate('author');
        res.status(200).json({
            message:"all Post are fetched successfully..",
            posts
        })
    } catch (error) {
        console.log("Error in getAllPost controller.."+error);
        return res.status(500).json({
            message:"Error in getAllPost controller."
        })
    }
};


export const getPostById =async(req,res)=>{
    try {
        const post = await Post.findById(req.params.id).populate('author');
        if(!post){
            return res.status(404).json({
                message:"No such blog found."
            })
        }
        res.json(post);
    } catch (error) {
        console.log("Some Error has occured in getPostById controller");
        res.status(500).json({
            error:error.message
        });
    }
};

export const updatePost = async(req,res)=>{
    try {
      const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!post) {
        return res.status(404).json({
          message: "Post not found for update.",
        });
      }
      res.status(200).json({
        message: "Post updated successfully.",
        post,
      });
    } catch (error) {
      console.log("Error in updatePost:", error);
      res.status(400).json({
        message: "Invalid update request.",
        error: error.message,
      });
    }
};
export const deletePost= async(req,res)=>{
    try {
        const deleted = await Post.findByIdAndDelete(req.params.id);
        if(!deleted){
            return res.status(400).json({
                message:"Post not found to delete."
            })
        }
        res.status(200).json("Post deleted.");
    } catch (error) {
        return res.status(500).json({
            error:error.message
        })
    }
};