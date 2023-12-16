import type { NextApiRequest, NextApiResponse } from "next";
import { auth } from "../../firebase/firebaseConfig";
import { getUserData } from "../../firebase/methods";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET")
    return res.status(405).json({ message: "Method not allowed" });
  const user = auth.currentUser;

  if (user) {
    const userData = getUserData();
    res.send({
      ...userData,
    });
  } else {
    res.send({
      error:
        "You must be signed in to view the protected content on this page.",
    });
  }
}
