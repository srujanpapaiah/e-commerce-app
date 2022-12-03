import mongoose, { mongo } from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
  },
});
