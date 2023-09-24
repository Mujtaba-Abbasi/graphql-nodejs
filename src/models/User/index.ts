import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const UserModal = mongoose.model("UserModal", userSchema);

export default UserModal;
