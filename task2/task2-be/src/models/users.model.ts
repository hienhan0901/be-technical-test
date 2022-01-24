import mongoose, { Document } from "mongoose";

export interface IUser extends Document {
  username: String;
  email: String;
  birthday: Date;
}

const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  birthday: Date,
});

export default mongoose.model<IUser>("User", UserSchema);
