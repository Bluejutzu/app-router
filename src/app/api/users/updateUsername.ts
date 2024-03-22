/** @format */

// pages/api/users/updateUsername.ts

import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/models/Users";

interface UpdateUsernameRequest {
  id: string;
  newUsername: string;
}

interface UpdateUsernameResponse {
  success: boolean;
  error?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<UpdateUsernameResponse>
) {
  try {
    if (req.method !== "POST") {
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
      return;
    }

    const { id, newUsername }: UpdateUsernameRequest = req.body;

    const User = db.User;
    const user = await User.findOneAndUpdate(
      { _id: id },
      { username: newUsername },
      { new: true }
    );
    if (user) {
      res.status(200).json({ success: true });
    } else {
      res.status(404).json({ error: "User not found", success: false });
    }
  } catch (error) {
    console.error("Error updating username:", error);
    res.status(500).json({ error: "Internal Server Error", success: false });
  }
}
