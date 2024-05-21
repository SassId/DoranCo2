import mongoose from "mongoose";

// * Define a scheme:
const UserSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  hashedPassword: { type: String, required: true },
});

// * Export the model to be used elsewhere:
// the first parameter is the name of the collection
export const UserModel = mongoose.model("user", UserSchema);
