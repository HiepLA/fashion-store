// GET /api/products
exports.getProducts = async (req, res) => {
  try {
    const query = {};

    // 🔥 nếu có truyền category ID, thì lọc theo đó
    if (req.query.category) {
      query.category = req.query.category;
    }

    const products = await Product.find(query).populate("category", "name");
    res.json({ products });
  } catch (err) {
    res.status(500).json({ message: "Lỗi server", error: err.message });
  }
};
