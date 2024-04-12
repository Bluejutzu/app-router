/** @format */

// DeleteToken.ts
import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  /*const deleteToken = async (token: string) => {
    const result = await axios.delete(
      `https://api.vercel.com/v3/user/tokens/${token}`,
      {
        headers: {
          Authorization: `Bearer <YOUR_VERCEL_TOKEN>`, // Replace with your Vercel token
        },
      }
    );
    const data = await result.data;
    return data.success; // Assuming the API returns success message
  };
  try {
    const token = req.query.token as string;
const result = await deleteToken(token);
    if (result) {
    } else {
      return res.statusMessage == "lmao";
    }
  } catch (error) {
    console.error(error);
  }*/
  return NextResponse.json("Unfinished api request, source: https://github.com/Bluejutzu/app-router/src/app/api/auth/delete-token")
}
