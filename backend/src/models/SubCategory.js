const Mongoose = require("mongoose");

const mongoosePaginate = require("mongoose-paginate-v2");

const SubCategorySchema = new Mongoose.Schema({
  id: { type: Object },
  name: { type: String, required: true },
  photo: { type: String },
  created_at: { type: Date, default: Date.now() },
  category: [],
});

SubCategorySchema.plugin(mongoosePaginate);

module.exports = Mongoose.model("SubCategory", SubCategorySchema);
