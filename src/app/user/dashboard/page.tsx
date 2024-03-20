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

  if (
    !(await User.findOne({ username: userData.username })) ||
    !(await User.findOne({ email: userData.email }))
  ) {
    create();
  }

  if (await User.findOne({ id: userData.id })) {
    redirect("/redirect/user");
  } else {
    data = (
      <div className='flex flex-col h-screen cursor-default'>
        <NavbarLO />
        <div className='flex-grow flex mt-12 justify-start'>
          {/* Flex text in the middle */}
          <div className='bg-gray-200/60 blur-md p-4 rounded-lg select-none'>
            <h1 className='text-4xl font-bold text-center'></h1>
            <p className='text-lg text-gray-700 text-center'>
              This is flex text in the middle of the screen.
            </p>
          </div>
        </div>
        <div className='flex items-end justify-end pr-5 pb-4 relative'>
          <div className='flex justify-end bg-gradient-to-r from-[#252a3f] to-[#423555] rounded-xl p-1 shadow-2xl'>
            <Image
              src={`${userPfp}`}
              alt={`undefined`}
              width={90}
              height={90}
              className='rounded-full'
            />
            <span className=' my-3 mx-5 font-bold text-xl sm:text-lg text-white '>
              {userData.username || userData.email}
              <div className='text-sm text-gray-500 hover:cursor-text'>
                <p>ID: {userData.id} </p>
              </div>
            </span>
          </div>
        </div>
      </div>
    );
  }

  return <div>{data}</div>;
}
