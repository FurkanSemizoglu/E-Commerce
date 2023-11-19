const express = require("express");
const {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.js");
const { authenticateMid } = require("../middleware/authMiddleware.js");

const router = express.Router();

router.get("/products" ,  getAllProducts);
router.get("/product/:id" , getProduct);
router.post("/newProduct" ,  createProduct);
router.patch("/updateProduct/:id", updateProduct)
router.delete("/product/:id" ,  deleteProduct)


module.exports =  router;