import mongoose from "mongoose";

const UsersSchema = mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
});

const UsersModel = mongoose.model("users", UsersSchema);

export async function createUser(firstname, lastname) {
  const newUser = new UsersModel({ firstname, lastname });
  newUser.save();
}

export async function getAllUsers() {
  const users = UsersModel.find();
  return users;
}
