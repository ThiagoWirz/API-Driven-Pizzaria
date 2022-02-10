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



app.listen(process.env.PORT, () => {
  console.log(`Rodando na porta ${process.env.PORT}`);
});
