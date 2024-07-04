// /models/categories.js
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const categoriesSchema = new Schema({
  name: String,
  description: String,
});

categoriesSchema.virtual("url").get(function () {
  return `/categories/${this.id}`;
});

module.exports = mongoose.model("categories", categoriesSchema);
