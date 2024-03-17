/** @format */

import mongoose, { Schema, Document } from "mongoose";

mongoose.connect(process.env.MONGODB_URI!);
mongoose.Promise = global.Promise;

export const db = {
  User: userModel(),
};


function userModel() {
  const schema = new Schema(
    {
      email: { type: String, required: true },
      username: { type: String },
      profile: { type: String },
      isAuthed: { type: Boolean },
    },
    {
      // add createdAt and updatedAt timestamps
      timestamps: true,
    }
  );

  return mongoose.models.User || mongoose.model("User", schema);
}
