import express from "express";
import multer from "multer";
import cloudinary from "../config/cloudinary.js";
import fs from "fs";

const router = express.Router();

// Cấu hình multer (lưu tạm file ảnh vào thư mục uploads/)
const upload = multer({ dest: "uploads/" });

// API upload ảnh
router.post("/", upload.single("image"), async (req, res) => {
  try {
    // Upload lên Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "fashion-store",
    });

    // Xóa file tạm trong thư mục uploads/
    fs.unlinkSync(req.file.path);

    // Trả link ảnh lại cho client
    res.status(200).json({
      message: "Upload thành công",
      url: result.secure_url,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Upload thất bại", error });
  }
});

export default router;
