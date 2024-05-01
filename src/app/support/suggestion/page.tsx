/** @format */

import NavbarForm from "@/components/client/Navbars/NavbarForm";
import React from "react";

export default function page() {
  return (
    <div className=' z-0'>
      <NavbarForm />
      <div className='flex justify-center text-white/70 hover:cursor-pointer z-10'>
        <a href='#data'>What happens with my submission?</a>
      </div>
      <div className='flex text-white/60 content-center items-center justify-center mt-4 text-lg'>
        Submissions have been disabled until further notice. This can be proven by checking the Network tab on the console.
        {/*All submissions are managed by the site owner. The data will be saved
        and displayed in a private server.
        <br /> Do not input personal information (Passwords, Identification for
        any sites...)*/}
      </div>
    </div>
  );
}
