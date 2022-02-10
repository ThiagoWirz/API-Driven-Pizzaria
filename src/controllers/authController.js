import bcrypt from "bcrypt";
import db from "../database.js";
import { v4 as uuid } from "uuid";

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

export async function signIn(req, res) {
  const { email, password } = req.body;

  try {
    const user = await db.collection("users").findOne({ email });
    if (!user) {
      return res.sendStatus(404);
    }
    const name = user.name;
    if (bcrypt.compareSync(password, user.password)) {
      const token = uuid();
      await db.collection("sessions").insertOne({ token, idUser: user._id });
      res.send({ name, email, token });
      return;
    }
    res.sendStatus(401);
  } catch {
    res.sendStatus(500);
  }
}
