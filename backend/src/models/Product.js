const Mongoose = require("mongoose");

const mongoosePaginate = require("mongoose-paginate-v2");

const ProductSchema = new Mongoose.Schema({
  id: { type: Object },
  name: { type: String, required: true },
  photo: { type: String, required: true },
  price: { type: Number },
  category: [],
  created_at: { type: Date, default: Date.now() },
});

ProductSchema.plugin(mongoosePaginate);

module.exports = Mongoose.model("Product", ProductSchema);
