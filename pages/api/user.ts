import type { NextApiRequest, NextApiResponse } from "next";
import { auth } from "../../firebase/firebaseConfig";
import { getUser, getUserData } from "../../firebase/methods";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET")
    return res.status(405).json({ message: "Method not allowed" });
  const uid = req.query.uid;

  console.log(req.query);

  if (uid) {
    if (typeof uid == "string") {
      const userData = await getUser(uid);
      console.log(userData);
      res.send({
        ...userData,
      });
    } else {
      res.send({
        error: "Incorrect arguement UID",
      });
    }
  } else {
    res.send({
      error:
        "You must be signed in to view the protected content on this page.",
    });
  }
}
