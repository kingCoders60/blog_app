import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String, // Clerk user ID (not ObjectId)
      required: true,
    },
    tag: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
    authorName:{
      type:String
    }
  },
  { timestamps: true }
);

export default mongoose.model("Post", postSchema);
