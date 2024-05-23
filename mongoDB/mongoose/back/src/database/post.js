import mongoose from "mongoose";

const PostSchema = mongoose.Schema({
  id: { type: String, required: true, unique: true },
  userID: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String },
});

export const PostModel = mongoose.model("post", PostSchema);
