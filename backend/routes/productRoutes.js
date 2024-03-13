import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductById,
} from "../controllers/productController.js";
// import products from "../data/products.js";
// import asyncHandler from "../middleware/asyncHandler.js";
// import Product from "../models/productModel.js";

// router.get(
//   "/",
//   asyncHandler(async (req, res) => {
//     const products = await Product.find({});
//     res.send(products);
//   })
// );

// router.get(
//   "/:id",
//   asyncHandler(async (req, res) => {
//     //   const id = req.params.id;
//     const product = await Product.findById(req.params.id);

//     if (product) {
//       return res.json(product);
//     }
//     res.status(404).json({ message: "Product not found" });
//   })
// );
router.route("/").get(getProducts);
router.route("/:id").get(getProductById);

export default router;
