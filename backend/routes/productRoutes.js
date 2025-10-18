import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

// ➕ Thêm sản phẩm
router.post("/", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 📜 Lấy danh sách sản phẩm (có tìm kiếm + phân trang)
router.get("/", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const skip = (page - 1) * limit;
    const keyword = req.query.keyword
      ? { name: { $regex: req.query.keyword, $options: "i" } }
      : {};
    const category = req.query.category ? { category: req.query.category } : {};

    const filter = { ...keyword, ...category };

    const products = await Product.find(filter)
      .populate("category")
      .limit(limit)
      .skip(skip);

    const count = await Product.countDocuments(filter);

    res.json({
      total: count,
      page,
      pages: Math.ceil(count / limit),
      products,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 🔍 Lấy sản phẩm theo ID
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate("category");
    if (!product) return res.status(404).json({ message: "Không tìm thấy sản phẩm" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✏️ Cập nhật sản phẩm
router.put("/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ❌ Xóa sản phẩm
router.delete("/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Đã xóa sản phẩm" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
