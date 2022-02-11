import orderSchema from "../schemas/orderSchema.js";

export function validateOrderMiddleware(req, res, next) {
  const order = req.body;

  const validation = orderSchema.validate(order);
  if (validation.error) {
    res.sendStatus(422);
    return;
  }

  next();
}
