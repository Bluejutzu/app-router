/** @format */

import axios from "axios";
import { NextResponse } from "next/server";
import { NextApiResponse } from "next";

export async function GET(req: Request, res: Response) {
  try {
    const request = await axios.get(`
      https://api.github.com/repos/Bluejutzu/app-router/deployments?per_page=1?environment=production`);

    const statusreq = await axios.get(
      `https://api.github.com/repos/Bluejutzu/app-router/deployments/${request.data[0].id}/statuses`
    );

    const state = statusreq.data[0].state;

    return NextResponse.json(state);
  } catch (error: any) {
    console.error(error);
    return NextResponse.json("error response " + error.message);
  }
}
