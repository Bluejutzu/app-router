/** @format */

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

export async function POST(
  req: NextApiRequest,
  res: NextApiResponse<UpdateUsernameResponse>
) {}
