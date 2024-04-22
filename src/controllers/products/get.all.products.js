import productService from "../../services/products/index.js";
export const getAllProductsController = async (req, res, next) => {
  try {
    const response = await productService.getAllProducts();

    res.status(200).json({ data: response });
  } catch (error) {
    next(error);
  }
};
