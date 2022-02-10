import signInSchema from "../schemas/signInSchema";

export function validateSignInMiddleware(req, res, next) {
  const { email, password } = req.body;

  const validation = signInSchema.validate({ email, password });
  if (validation.error) {
    res.sendStatus(422);
    return;
  }
  next();
}
