/** @format */

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { db } from "@/models/Users";
import Image from "next/image";

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
    <div className='flex flex-nowrap justify-center content-end text-white'>
      User Profile:{" "}
      <Image src={`${userPfp}`} alt={`${givenUser}`} width={24} height={24} />
    </div>
  );
}
