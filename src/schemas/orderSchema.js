import joi from "joi";
const orderSchema = joi.object({
  street: joi.string().required(),
  number: joi.number().integer().required(),
  compliment: joi.string().allow(""),
  payment: joi.string().required(),
});

export default orderSchema;
