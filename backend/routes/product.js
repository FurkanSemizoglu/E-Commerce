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
router.post("/newProduct" , authenticateMid , createProduct);
router.patch("/updateProduct/:id" , authenticateMid ,updateProduct)
router.delete("/product/:id" , authenticateMid , deleteProduct)


module.exports =  router;