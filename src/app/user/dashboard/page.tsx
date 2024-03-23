/** @format */

// ClientDashboard.tsx

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { db } from "@/models/Users";
import { NavbarLO, UserInfoCard } from "@/components";
import { redirect } from "next/navigation";

export default async function ClientDashboard() {
  const User = db.User;
  const { isAuthenticated, getUser } = getKindeServerSession();

  const userData = await getUser();

  const idToken = userData?.id || "";
  const email = userData?.email || "";
  const givenUser = userData?.given_name || "";
  const userPfp = userData?.picture || "";
  const isAuthed = await isAuthenticated();

  if (!userData) {
    redirect("/redirect/user");
  }

  async function handleRedirect() {
    if (await User.findOne({ id: idToken })) {
      redirect("/redirect/user");
    }
  }

  handleRedirect();

  async function createUser() {
    const existingUsername = await User.findOne({ username: givenUser });
    const existingEmail = await User.findOne({ email });

    if (!existingUsername || !existingEmail) {
      const user = new User({
        id: idToken,
        email,
        username: givenUser,
        profile: userPfp,
        isAuthed,
      });
      await user.save();
      console.log("User saved");
    }
  }

  createUser();

  return (
    <div className='flex flex-col h-screen '>
      <NavbarLO />
      <div className='flex-grow flex items-center lg:justify-start sm:justify-center'>
        <UserInfoCard
          userData={{
            id: idToken,
            email,
            username: givenUser,
            profile: userPfp,
            isAuthed,
          }}
        />
      </div>
    </div>
  );
}
