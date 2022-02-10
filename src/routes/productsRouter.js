import { Router } from "express";
import { getDrinks, getPizzas, getSales } from "../controllers/productsController.js"


const productsRouter = Router();

productsRouter.get("/drinks", getDrinks);
productsRouter.get("/pizzas", getPizzas);
productsRouter.get("/sales", getSales);

export default productsRouter;