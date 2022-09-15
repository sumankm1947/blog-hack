import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, username, email, password, avatar } = req.body;
    try {
      const findUser = await prisma.user.findFirst({
        where: { OR: [{ username }, { email }] },
      });
      if (findUser) {
        return res.status(400).json({ message: "User already exists" });
      }

      const savedUser = await prisma.user.create({
        data: { name, username, email, password, avatar },
      });

      res
        .status(201)
        .json({ message: "User created successfully", data: savedUser });
    } catch (error: any) {
      res.status(400).json({ message: "User not created", error });
    }
  } else {
    res.status(405).json({ message: "Method not supported" });
  }
}
