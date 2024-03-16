/** @format */

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Navbar } from "@/components";

export default async function ClientPage() {
  const { isAuthenticated, getIdToken, getUser } = getKindeServerSession();

  const accessToken = (await getIdToken()).azp;
  const idToken = (await getUser())?.id;
  const email = (await getUser())?.email;
  const givenUser = (await getUser())?.given_name;
  const isAuthed = await isAuthenticated();

  const userData = {
    accessToken: accessToken,
    id: idToken,
    email: email,
    username: givenUser,
    isAuthed: isAuthed,
  };
  console.log(userData);

  return (
    <div>
      <Navbar />
      User Dashboard!
    </div>
  );
}

