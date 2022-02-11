import db from "../database.js";

export async function postOrder(req, res) {
  const order = req.body;
  const authorization = req.headers.authorization;
  const token = authorization?.replace("Bearer ", "");

  try {
    const session = await db.collection("sessions").findOne({ token });
    if (!session) {
      return res.sendStatus(401);
    }
    await db
      .collection("orders")
      .insertOne({ ...order, idUser: session.idUser });
    res.sendStatus(201);
  } catch {
    res.sendStatus(500);
  }
}
