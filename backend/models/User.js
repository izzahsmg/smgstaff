const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  salary: Number,
  allowance: Number,
  sesco: Number,
  tax: Number,
  epf: Number
});

module.exports = mongoose.model("User", userSchema);
