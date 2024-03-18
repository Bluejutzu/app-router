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

  let data: React.JSX.Element;

  if (!(await User.findOne({ username: userData.username }))) {
    create();
  }

  if (await User.findOne({ id: userData.id })) {
    redirect("/redirect/user");
  } else {
    data = (
      <div className='flex flex-col h-screen'>
        <NavbarLO />

        <div className='flex-grow flex items-end justify-end pr-6 pb-6 relative'>
          <Image
            src={`${userPfp}`}
            alt={`${givenUser}`}
            width={80}
            height={80}
            className='rounded-full'
          />

          <span className='my-3 mx-5 font-bold text-xl text-white'>
            {userData.username || userData.email}
            <div className='text-sm text-gray-500'>
              <p>ID: {userData.id}</p>
              <p className='text-gray-500/50'>
                This is not your ID actually cause i fucked up the data
                retrieval
              </p>
              <div className=' text-base'>
                im too lazy to make the rest of the dashboard so adios
              </div>
            </div>
          </span>
        </div>
      </div>
    );
  }

  return <div>{data}</div>;
}
