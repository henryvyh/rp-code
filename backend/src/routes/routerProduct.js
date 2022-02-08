const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const { formatResponse } = require("../utils/utils");

router.post("/", async (req, res) => {
  const { name, photo, price } = req.body;
  const product = new Product({ name, photo, price });
  let newProdct = await product.save();
  res.json(newProdct);
});

router.get("/", async (req, res) => {
  const { query, page } = req.query;
  const regex = new RegExp(query, "i");
  let filters = query ? { name: { $regex: regex } } : {};
  let products = await Product.paginate(filters, { sort: { created_at: -1 } });
  let resp = formatResponse(products);
  res.json(resp);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  let products = await Product.find({ _id: id });
  res.json(products);
});
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, photo, price } = req.body;
  let products = await Product.findByIdAndUpdate(
    { _id: id },
    {
      name,
      price,
      photo,
    }
  );
  res.json(products);
});
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await Product.findByIdAndDelete(id);
  res.json({ msg: "Product deleted" });
});

module.exports = router;
