import productService from "../../services/products/index.js";
export const deleteProductController = async (req, res, next) => {
  try {
    const { id } = req.params;

    const checkIfExist = await productService.getProduct(id);

    if (checkIfExist.length === 0)
      return res.status(404).json({ message: "Product not found" });

    const response = await productService.deleteProduct(id);

    res
      .status(200)
      .json({ message: "Product eliminated", data: checkIfExist[0] });
  } catch (error) {
    next(error);
  }
};
