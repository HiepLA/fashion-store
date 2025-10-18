import express from "express";
import Category from "../models/Category.js";

const router = express.Router();

// Thêm danh mục
router.post("/", async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.status(201).json(category);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Lấy danh sách danh mục
router.get("/", async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
});

// Xóa danh mục
router.delete("/:id", async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
    res.json({ message: "Đã xóa danh mục" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
