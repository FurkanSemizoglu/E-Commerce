const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },

  stock: {
    type: Number,
    required: true,
    default: 1,
  },

  category: {
    type: String,
    required: true,
  },

  brand: String,

  stockQuantity: {
    type: Number,
    required: true,
    min: 0,
  },

  rating: {
    type: Number,
    default: 0,
  },

  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ], // Ürüne ait resimlerin bir dizi olarak saklanması


  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },

  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        default: 0,
      },
    },
  ],

  createdAt: {
    type: Date,
    default: Date.now,
  },
}, {timestamps :true});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
