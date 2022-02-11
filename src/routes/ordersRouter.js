import { Router } from "express";
import { postOrder } from "../controllers/ordersController.js";
import { validateOrderMiddleware } from "../middlewares/validateOrderMiddleware.js";

const ordersRouter = Router();

ordersRouter.post("/orders", validateOrderMiddleware, postOrder);

export default ordersRouter;
