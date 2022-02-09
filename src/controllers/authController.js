import bcrypt from "bcrypt";
import db from "../database.js";

export async function signUp(req, res) {
  const user = req.body;

  const sameEmail = await db.collection("users").findOne({ email: user.email });
  if (sameEmail) {
    return res.sendStatus(401);
  }

  const hashPassword = bcrypt.hashSync(user.password, 10);
  try {
    await db.collection("users").insertOne({ ...user, password: hashPassword });
    res.sendStatus(201);
  } catch {
    res.sendStatus(500);
  }
}
