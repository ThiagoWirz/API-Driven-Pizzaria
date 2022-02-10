import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import router from "./routes/index.js";
import db from "./database.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

app.get("/", (req, res) => {
  console.log("bateu aqui");
  res.send("tudo certo bro");
});

app.post("/sales", async (req, res) => {
  const sale = req.body
  try {
    await db.collection("sales").insertOne(sale);
    res.sendStatus(201)

  } catch (error) {
    res.sendStatus(500)
  }
})

app.delete("/sales", async (req, res) => {
  try {
    const sales = await db.collection("sales").findOneAndDelete({ name: 'Combo Familia' });
    res.send(sales).status(200)

  } catch (error) {
    res.send(error).status(500)
  }
})

app.get("/sales", async (req, res) => {

  try {
    const sales = await db.collection("sales").find({}).toArray();
    res.send(sales).status(200)

  } catch (error) {
    res.send(error).status(500)
  }
})

app.listen(process.env.PORT, () => {
  console.log(`Rodando na porta ${process.env.PORT}`);
});
