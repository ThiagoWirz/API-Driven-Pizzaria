import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
// import router from "./routes/index.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  console.log("bateu aqui")
  res.send("tudo certo bro")
})


app.listen(process.env.PORT, () => {
  console.log(`Rodando na porta ${process.env.PORT}`);
});
