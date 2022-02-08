const express = require("express");
const router = express.Router();
const Category = require("../models/Category");
const SubCategory = require("../models/SubCategory");
const { formatResponse } = require("../utils/utils");

router.post("/", async (req, res) => {
  const { name, photo } = req.body;
  const category = new Category({ name, photo });
  let newProdct = await category.save();
  res.json(newProdct);
});

router.get("/", async (req, res) => {
  const { query, page } = req.query;
  let categories = await Category.find({ sort: { created_at: -1 } });
  res.json({ docs: categories });
});

module.exports = router;
