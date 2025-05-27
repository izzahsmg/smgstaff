const express = require('express');
const router = express.Router();
const User = require('../models/sales');

router.get("/", async (req, res) => {
  const sales = await User.find();
  res.json(sales);
});

router.post("/", async (req, res) => {
  const newSales = new User(req.body);
  await newSales.save();
  res.json(newSales);
});

module.exports = router;
