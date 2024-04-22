import joi from "joi";
const patchProductSchema = joi
  .object({
    title: joi.string(),
    description: joi.string(),
    status: joi.string().valid("stock", "sin stock").default("stock"),
  })
  .or("title", "description", "status")
  .required();

export default patchProductSchema;
