/** @format */

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { db } from "@/models/Users";
import Development from "@/components/client/error/Development";

export default async function ClientDashboard() {
  const User = db.User;
  const { isAuthenticated, getUser } = getKindeServerSession();

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

  async function create() {
    const user = new User(userData);
    await user.save();
    console.log("user saved");
  }

  if (!(await User.findOne({ username: userData.username }))) {
    create();
  }

  return (
    <div>
      <Development />
    </div>
  );
}
