import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {},
  {
    strict: false,
    versionKey: false,
    timestamps: true,
  }
);

export default mongoose.model("Product", productSchema);
