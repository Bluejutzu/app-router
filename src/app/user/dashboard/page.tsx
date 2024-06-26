/** @format */
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { db } from "@/models/Users";
import { NavbarLO, UserInfoCard } from "@/components";
import { redirect } from "next/navigation";

export default async function ClientDashboard() {
  const User = db.User;
  const { isAuthenticated, getUser } = getKindeServerSession();

  const userData = await getUser();

  async function handleRedirect() {
    if (!userData) {
      redirect("/redirect/user");
    }
  }

  const idToken = userData?.id || "";
  const email = userData?.email || "";
  let givenUser = userData?.given_name || "";
  const userPfp = userData?.picture || "";
  const isAuthed = await isAuthenticated();

  const data = await User.collection.findOne({ email: email });
  givenUser = data?.username || givenUser || "Failed to fetch user";

  handleRedirect();

  async function createUser() {
    const existingUsername = await User.findOne({ username: givenUser });
    const existingEmail = await User.findOne({ email: email });

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
    <div className='flex flex-col h-screen'>
      <NavbarLO />
      <div className='flex-grow flex items-center lg:justify-start lg:ml-10 sm:justify-center  '>
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
