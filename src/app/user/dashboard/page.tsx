/** @format */

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { db } from "@/models/Users";
import Image from "next/image";
import { NavbarLO } from "@/components";
import { redirect } from "next/navigation";

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

  let data: JSX.Element;

  if (!(await User.findOne({ username: userData.username }))) {
    create();
  }

  if (!userPfp) {
    redirect("/redirect/user");
  } else {
    data = (
      <div>
        <NavbarLO />
        <div className='flex flex-nowrap justify-center content-end text-white'>
          User Profile:{" "}
          <a href='/'>
            <Image
              src={`${userPfp}`}
              alt={`${givenUser}`}
              width={300}
              height={300}
            />
          </a>
        </div>
      </div>
    );
  }

  return <div>{data}</div>;
}
