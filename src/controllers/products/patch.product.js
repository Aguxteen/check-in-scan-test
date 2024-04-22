import validateHelper from "../../helpers/validate.helper.js";
import patchProductSchema from "../../schemas/patch.product.schema.js";
import productService from "../../services/products/index.js";
export const patchProductController = async (req, res, next) => {
  try {
    const { id } = req.params;
    await validateHelper(patchProductSchema, req.body);

    const checkIfExist = await productService.getProduct(id);

    if (checkIfExist.length === 0)
      return res.status(404).json({ data: "Product not found" });

    await productService?.patchProduct(id, req.body);
    const updated = await productService.getProduct(id);

    res.status(200).json({ message: "Product patched", data: updated[0] });
  } catch (error) {
    next(error);
  }
};
