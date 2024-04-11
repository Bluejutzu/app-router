/** @format */

import React from "react";
import { Button } from "@/components";

/*const navbar = [
  { name: "Buttons", href: "#" },
  { name: "About", href: "#" },
  { name: "Support", href: "#" },
];*/

const Page = () => {
  return (
    <div className='flex flex-col h-screen justify-center items-center content-center bg-gradient-to-r from-purple-700/60 via-purple-600 to-pink-500  relative'>
      <div className='flex flex-col mb-5 sm:flex-row sm:justify-center sm:items-center gap-5 text-white text-2xl font-extrabold'>
        Different Buttons
        {/*{navbar.map((item) => (
          <a
            key={item.name}
            href={item.href}
            // Scale increases slightly on hover
            className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-200 bg-gradient-to-l from-purple-700/60 via-purple-600 to-pink-500 hover:bg-[#7e22ce] shadow-lg duration-300'>
            {item.name}
          </a>
        ))}*/}
      </div>
      <hr className='border-gray-300 w-3/4 mx-auto my-5 sm:w-full sm:my-10' />
      <div className='flex flex-col sm:flex-row gap-5'>
        <Button
          size='lg'
          variant='subtle'
          className='text-black hover:text-black mb-5 sm:mb-0'>
          Im subtle
        </Button>
        <Button
          size='lg'
          variant='ghost'
          className='text-white hover:text-black mb-5 sm:mb-0'>
          Im a ghost!
        </Button>
        <Button
          size='lg'
          variant='outline'
          className='text-white hover:text-black mb-5 sm:mb-0'>
          I like outlines!
        </Button>
        <Button
          size='lg'
          variant='destructive'
          className='text-white hover:text-white mb-5 sm:mb-0'>
          Im destructive!!!
        </Button>
        <Button
          size='lg'
          variant='link'
          className='text-white hover:text-black mb-5 sm:mb-0'>
          I take you somewhere
        </Button>
      </div>
      <a
        href='https://github.com/Bluejutzu/app-router/tree/master/src/components'
        className='absolute text-sm font-bold bottom-5 left-5 hover:underline transform transition duration-300 ease-in-out outline-none rounded-xl border-2 border-gray-300/60 py-2 px-4 bg-white/60 hover:bg-gray-100 hover:border-gray-400'>
        Source Code
      </a>
    </div>
  );
};

export default Page;
