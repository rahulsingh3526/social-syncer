import type { NextApiRequest, NextApiResponse } from "next";
import { auth } from "../../firebase/firebaseConfig";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET")
    return res.status(405).json({ message: "Method not allowed" });
  const user = auth.currentUser;

  if (user) {
    res.send({
      Permissions: ["EDIT", "DELETE", "CREATE"],
      Role: "USER",
    });
  } else {
    res.send({
      Permissions: ["CREATE"],
      Role: "GUEST",
    });
  }
}
