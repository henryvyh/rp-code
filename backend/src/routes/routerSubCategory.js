const express = require("express");
const router = express.Router();
const SubCategory = require("../models/SubCategory");
const { formatResponse } = require("../utils/utils");

router.post("/", async (req, res) => {
  const { name, photo, category } = req.body;
  const subcategory = new SubCategory({ name, photo, category });
  let newProdct = await subcategory.save();
  res.json(newProdct);
});

module.exports = router;
