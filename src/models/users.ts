/** @format */

import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
  _id: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  username: {
    type: String,
  },
});
