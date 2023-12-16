import type { NextApiRequest, NextApiResponse } from "next";
import { getAllUsers, getUser, getUserData } from "../../firebase/methods";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET")
    return res.status(405).json({ message: "Method not allowed" });

  const queryId = req.query.id;

  if (queryId) {
    if (typeof queryId !== "string") {
      return res.status(400).json({ message: "Bad request" });
    }
    const userData = getUser(queryId);
    res.send({
      ...userData,
    });
  } else {
    const allUsers = await getAllUsers();
    res.send(allUsers);
  }
}
