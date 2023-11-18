const Product = require("../models/product.js");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: "Ürün bulunamadı" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Ürün bulunamadı" });
    }
    res.json({ message: "Ürün başarıyla silindi" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createProduct = async (req, res) => {
  
  try {
    const { name, description, price, category, brand, stock, images } = req.body;
      
    const newProduct = new Product({ name, description, price, category, brand, stock, images})

    const result = newProduct.save();

    console.log("new product created");
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const updateProduct = async (req, res) => {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.productId,
        req.body,
        { new: true }
      );
      if (!updatedProduct) {
        return res.status(404).json({ message: 'Ürün bulunamadı' });
      }
      res.json(updatedProduct);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };