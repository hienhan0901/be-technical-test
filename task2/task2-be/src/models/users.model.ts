import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: String,
    email: String,
    birthday: Date,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", UserSchema);
