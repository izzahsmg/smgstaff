const mongoose = require('mongoose');


const salesSchema = new mongoose.Schema({
  revenu: String,
  performance: String,
  revenue: String,
  knowledge: String
});

module.exports = mongoose.model("Sales", salesSchema);
