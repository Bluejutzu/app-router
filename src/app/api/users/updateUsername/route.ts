/** @format */

import { NextResponse } from "next/server";
import { db } from "@/models/Users";

export async function POST(req: Request, res: Response) {
  try {
    const requestBody = await req.json();
    const email = requestBody.email;

    const User = db.User;
    await User.collection.findOneAndUpdate(
      {
        email: email,
      },
      { $set: { username: requestBody.newUsername } }
    );

    // Assuming User.findById() returns a promise
    const userData = await User.collection.findOne({ email: email });

    const data = {
      UserData: userData,
      requestBody: requestBody,
    };

    return NextResponse.json(data);
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message });
  }
}
