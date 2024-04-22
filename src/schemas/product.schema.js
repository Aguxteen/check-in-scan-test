import joi from "joi";
const productSchema = joi.object({
  title: joi.string().required(),
  description: joi.string().required(),
  status: joi.string().valid("stock", "sin stock").default("stock"),
});

export default productSchema;
