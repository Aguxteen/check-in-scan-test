import productService from "../../services/products/index.js";
export const getProductController = async (req, res, next) => {
  try {
    const { id } = req.params;

    const response = await productService.getProduct(id);

    if (response.length === 0)
      return res.status(404).json({ message: "Product not found" });

    res.status(200).json({ data: response });
  } catch (error) {
    next(error);
  }
};
