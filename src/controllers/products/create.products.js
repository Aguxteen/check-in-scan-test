import validateHelper from "../../helpers/validate.helper.js";
import productSchema from "../../schemas/product.schema.js";
import productService from "../../services/products/index.js";
export const createProductController = async (req, res, next) => {
  try {
    await validateHelper(productSchema, req.body);

    const response = await productService.createProduct(req.body);

    if (response?.affectedRows === 1) {
      const created = await productService.getProduct(response.UUID);

      res.status(200).json({ message: "Product created", data: created });
    } else {
      throw new Error("Error when creating the product");
    }
  } catch (error) {
    next(error);
  }
};
