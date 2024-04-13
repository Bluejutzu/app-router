/** @format */

import { env } from "@/lib/utils";
import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
  /*try {
    // Your logic to retrieve user data and generate JWT token goes here
    const vercelAuthToken = env.VERCEL_AUTH;
    // Generate JWT token
    const payload = {
      vercelAuthToken: vercelAuthToken,
    };

    const jwtToken = await jwt.sign(
      payload
      "H1FRhwe2jx2C9UnzuA8Ei264eDyTGh7RzS8MHPCXwt-_EIeQf_WHm5AuIMqj5Xs5",
      { expiresIn: "10m" }
    );

    return NextResponse.json("Nuhuh");
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message });
  } return NextResponse.json(
    "Unfinished api request, source: https://github.com/Bluejutzu/app-router/src/app/api/auth/generate-token"
  );*/

  const request = await axios.get(`
https://api.github.com/repos/Bluejutzu/app-router/deployments?per_page=1?environment=production`);
  console.log(request.data[0].id);
  const statusreq = await axios.get(
    `https://api.github.com/repos/Bluejutzu/app-router/deployments/${request.data[0].id}/statuses`
  );
  console.log(statusreq.data)

  const deployment_id = 1234567;
  /*const response = await axios.get(`
https://api.github.com/repos/Bluejutzu/app-router/deployments/${deployment_id}`);
  return console.log(response.data);*/
  return NextResponse.json(
    "Unfinished api request, source: https://github.com/Bluejutzu/app-router/src/app/api/auth/generate-token"
  );
}
