import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  clerkId: { type: String, unique: true, required: true },
  name: String,
  email: String,
  imageUrl: String,
  region: String,
  badges: [String]
})

export default mongoose.model("User",userSchema);