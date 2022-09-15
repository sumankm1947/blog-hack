import { NextApiRequest, NextApiResponse } from "next";

export default function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.json({ message: "API RUNNING" });
  }
  else {
    res.status(405).json({message: "Method not supported"});
  }
}
