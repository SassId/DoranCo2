import mongoose from "mongoose";

// * Define a scheme:
const todolistSchema = mongoose.Schema({
  title: { type: String, required: true },
  createdAt: { type: Date },
  todos: [
    {
      title: { type: String, required: true },
      isDone: { type: Boolean, require: true, default: false },
    },
  ],
});

// * Export the model to be used elsewhere:
// the first parameter is the name of the collection
export const todolistModel = mongoose.model("todolist", todolistSchema);
