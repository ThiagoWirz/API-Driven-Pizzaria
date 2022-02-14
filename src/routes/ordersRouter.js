import { Router } from "express";
import { postOrder, getOrder } from "../controllers/ordersController.js";
import { validateOrderMiddleware } from "../middlewares/validateOrderMiddleware.js";

const ordersRouter = Router();

ordersRouter.post("/orders", validateOrderMiddleware, postOrder);
ordersRouter.get("/orders", getOrder);

export default ordersRouter;
