import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    Subscribers: {
      type: Number,
      default: 0,
    },
    SubscribedUser: {
      type: [String],
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
