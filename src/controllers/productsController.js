import db from "../database.js";

export async function getDrinks(req, res) {
    try {
        const drinks = await db.collection("drinks").find({}).toArray();
        res.send(drinks).status(200)

    } catch (error) {
        res.send(error).status(500)
    }
}

export async function getPizzas(req, res) {
    try {
        const pizzas = await db.collection("pizzas").find({}).toArray();
        res.send(pizzas).status(200)

    } catch (error) {
        res.send(error).status(500)
    }
}

export async function getSales(req, res) {

    try {
        const sales = await db.collection("sales").find({}).toArray();
        res.send(sales).status(200)

    } catch (error) {
        res.send(error).status(500)
    }
}