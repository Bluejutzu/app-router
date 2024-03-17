/** @format */

import mongoose, { Schema, Document } from "mongoose";

// Define interface for your document
interface IUser extends Document {
  email: string;
  username?: string;
  profile?: string;
  isAuthed?: boolean;
}

// Define the schema
const UserSchema: Schema = new Schema({
  email: { type: String, required: true },
  username: { type: String },
  profile: { type: String },
  isAuthed: { type: Boolean },
});

// Create and export the model
export const User =
  mongoose.models.User 
