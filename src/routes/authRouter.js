import { Router } from "express";
import { signIn, signUp } from "../controllers/authController.js";
import { validateUserMiddleware } from "../middlewares/validateUserMiddleware.js";

const authRouter = Router();

authRouter.post("/auth/sign-up", validateUserMiddleware, signUp);
authRouter.post("/auth/sign-in", signIn);

export default authRouter;
