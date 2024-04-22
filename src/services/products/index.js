import { createProduct } from "./create.product.service.js";
import { deleteProduct } from "./delete.product.service.js";
import { getAllProducts } from "./get.all.product.service.js";
import { getProduct } from "./get.product.service.js";
import { patchProduct } from "./patch.product.service.js";

export default {
  patchProduct,
  deleteProduct,
  getProduct,
  createProduct,
  getAllProducts,
};
