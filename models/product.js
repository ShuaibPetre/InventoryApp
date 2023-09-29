const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  title: { type: String, required: true },
  family: { type: Schema.Types.ObjectId, ref: "Family", required: true },
  produceType: { type: Schema.Types.ObjectId, ref: "ProduceType", required: true },  
  isbn: { type: String, required: true },
  description: { type: String, required: true },
});

// Virtual for Product's URL
ProductSchema.virtual("url").get(function () {
  return `/catalog/${this._id}`;
});

// Export model
module.exports = mongoose.model("Product", ProductSchema);
