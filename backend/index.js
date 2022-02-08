const express = require("express");
var cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const routerProduct = require("./src/routes/routerProduct");
const routerCategory = require("./src/routes/routerCategory");
const routerSubCategory = require("./src/routes/routerSubCategory");
const app = express();
const port = process.env.PORT || 4000;
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect(process.env.CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.on("error", (e) => {
  console.log("Error connecting to the service", e);
});
connection.once("open", () => {
  console.log("Conectado a la BD");
});

app.use("/api/products", routerProduct);
app.use("/api/category", routerCategory);
app.use("/api/subcategory", routerSubCategory);

module.exports = app.listen(port, () => {
  console.log("Sever started on port:", port);
});
