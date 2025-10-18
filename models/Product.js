import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Tên sản phẩm là bắt buộc"],
    },
    description: {
      type: String,
      required: [true, "Mô tả sản phẩm là bắt buộc"],
    },
    price: {
      type: Number,
      required: [true, "Giá sản phẩm là bắt buộc"],
    },
    image: {
      type: String, // URL ảnh (Cloudinary hoặc local)
      default: "",
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category", // liên kết sang bảng Category
      required: true,
    },
    brand: {
      type: String,
      default: "No brand",
    },
    stock: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true, // tự thêm createdAt & updatedAt
  }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
