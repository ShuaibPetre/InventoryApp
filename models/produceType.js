const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProduceTypeSchema = new Schema({
  producetype: { type: String, required: true, maxLength: 100 },
});



// Virtual for author's URL
ProduceTypeSchema.virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/catalog/type/${this._id}`;
});

// Export model
module.exports = mongoose.model("ProduceType", ProduceTypeSchema);