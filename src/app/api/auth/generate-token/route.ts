/** @format */

import { env } from "@/lib/utils";
import { NextResponse } from "next/server";
const jwt = require("jsonwebtoken");

export async function GET(req: Request, res: Response) {
  /*try {
    // Your logic to retrieve user data and generate JWT token goes here
    const vercelAuthToken = env.VERCEL_AUTH;
    // Generate JWT token
    const payload = {
      vercelAuthToken: vercelAuthToken,
    };

    const jwtToken = await jwt.sign(
      payload,
      "H1FRhwe2jx2C9UnzuA8Ei264eDyTGh7RzS8MHPCXwt-_EIeQf_WHm5AuIMqj5Xs5",
      { expiresIn: "10m" }
    );

    return NextResponse.json("Nuhuh");
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message });
  }*/
   return NextResponse.json(
     "Unfinished api request, source: https://github.com/Bluejutzu/app-router/src/app/api/auth/generate-token"
   );
}
