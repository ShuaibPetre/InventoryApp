const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FamilySchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
});



// Virtual for author's URL
FamilySchema.virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/catalog/family/${this._id}`;
});

// Export model
module.exports = mongoose.model("Family", FamilySchema);