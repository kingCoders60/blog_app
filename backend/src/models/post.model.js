import mongoose from "mongoose";
import User from '../models/user.model.js'; 

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,ref:'User',
        required:true
    },
    tag:{
        type:String
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    updatedAt:{
        type:Date,
        default: Date.now
    }
},{timestamps:true});


export default mongoose.model("Post",postSchema);