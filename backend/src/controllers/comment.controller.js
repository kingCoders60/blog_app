import Comment from "../models/comment.model.js";

export const createComment = async(req,res)=>{
    try {
        const comment = new Comment(req.body);
        await comment.save();
        res.status(201).json(comment);
    } catch (error) {
        console.log("Some error has occured in createComment controller..");
        return res.status(500).json({
            error:error.message
        });
    }
}

export const getCommentsByPost = async(req,res)=>{
    try {
        const comments = await Comment.find({post:req.params.postId}).populate('author');
        return res.status(200).json(comments);
    } catch (error) {
        return res.status(500).json({
            error:error.message
        });
    }
}


export const deleteComment = async(req,res)=>{
    try {
        const deleted = await Comment.findByIdAndUpdate(req.params.commentId);
        if(!deleted){
            return res.status(400).json({
                message:"Error in deleting the post"
            })
        }
        res.status(200).json({
            message:"Comment is deleted successfully"
        })
    } catch (error) {
        console.log("Error in deleteComment controller..");
        return res.status(500).json({
            error:error.message
        });
    }
};

