import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import products from "./data/products.js";
import { dot } from "node:test/reporters";
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/products", (req, res) => {
  res.send(products);
});

app.get("/api/products/:id", (req, res) => {
  //   const id = req.params.id;
  const product = products.find((p) => p._id === req.params.id);
  res.send(product);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
