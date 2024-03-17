/** @format */

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import NavbarLO from "@/components/client/auth/NavbarLO";
import { User } from "@/models/Users";

export default async function Dashboard() {
  const { isAuthenticated, getIdToken, getUser, getPermissions } =
    getKindeServerSession();

  const idToken = (await getUser())?.id;
  const email = (await getUser())?.email;
  const givenUser = (await getUser())?.given_name;
  const userPfp = (await getUser())?.picture;
  const isAuthed = await isAuthenticated();

  const userData = {
    id: idToken,
    email: email,
    username: givenUser,
    profile: userPfp,
    isAuthed: isAuthed,
  };

  console.log(userData);

  const newUser = new User(userData);
  await newUser.save();

  return (
    <div>
      <NavbarLO />
    </div>
  );
}
