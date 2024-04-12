/** @format */
"use client";

import React, { useState } from "react";
import { Button } from "@/components";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const navbar = [
  { name: "Github", href: "https://github.com/Bluejutzu/app-router/" },
  { name: "Support", href: "/api/support/submit-a-suggestion" },
  { name: "Sources", href: "/source" },
];

const Page = () => {
  const [ishovered1, setHovered1] = useState(false);
  const [ishovered2, setHovered2] = useState(false);
  const [ishovered3, setHovered3] = useState(false);
  const [ishovered4, setHovered4] = useState(false);
  const [ishovered5, setHovered5] = useState(false);

  // Add more state variables if you have more buttons

  const handleHover1 = () => {
    setHovered1(!ishovered1);
  };

  const handleHover2 = () => {
    setHovered2(!ishovered2);
  };

  const handleHover3 = () => {
    setHovered3(!ishovered3);
  };
  const handleHover4 = () => {
    setHovered4(!ishovered4);
  };
  const handleHover5 = () => {
    setHovered5(!ishovered5);
  };
  return (
    <div className='flex flex-col h-screen justify-center items-center content-center bg-gradient-to-r from-purple-700/60 via-purple-600 to-pink-500  relative'>
      <div className='flex flex-col mb-5 sm:flex-row sm:justify-center sm:items-center gap-5 text-white text-2xl font-extrabold'>
        <div className=' text-center'>
          <h2 className='text-5xl font-bold mx-auto mb-2'>Different Buttons</h2>

          {/* Navbar Links */}
          {navbar.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              // Scale increases slightly on hover
              className={` ${buttonVariants({
                variant: "ghost",
              })}  mx-3 rounded-lg px-3 py-2 text-base font-semibold opacity-60 hover:opacity-100  shadow-lg duration-300 text-black`}>
              {item.name}
            </Link>
          ))}
          <dl className='font-semibold text-lg mt-1 -mb-6 text-white/50 select-none'>
            Navigation
          </dl>
        </div>
      </div>
      <hr className='border-gray-300 w-3/4 mx-auto my-5 sm:w-full sm:my-10' />
      <div className='flex flex-col sm:flex-row gap-5'>
        <Button
          onMouseEnter={handleHover1}
          onMouseLeave={handleHover1}
          size='lg'
          variant='subtle'
          className={`text-black hover:text-black mb-5 sm:mb-0 ${
            ishovered1 ? "w-30 h-10" : "w-32 h-10"
          }`}>
          {ishovered1 ? <div>Nothing</div> : <div>Im subtle</div>}
        </Button>
        <Button
          onMouseEnter={handleHover2}
          onMouseLeave={handleHover2}
          size='lg'
          variant='ghost'
          className='text-white hover:text-black mb-5 sm:mb-0'>
          {ishovered2 ? <div>Dont catch me!</div> : <div>Im a ghost!</div>}
        </Button>
        <Button
          onMouseEnter={handleHover3}
          onMouseLeave={handleHover3}
          size='lg'
          variant='outline'
          className='text-white hover:text-black mb-5 sm:mb-0'>
          {ishovered3 ? <div>Cozy ;)</div> : <div>Simple</div>}
        </Button>
        <Button
          onMouseEnter={handleHover4}
          onMouseLeave={handleHover4}
          size='lg'
          variant='destructive'
          className='text-white hover:text-white mb-5 sm:mb-0'>
          {ishovered4 ? <div>RAAHAAHHH!!</div> : <div>Im destructive!!!</div>}
        </Button>
        <Button
          onMouseEnter={handleHover5}
          onMouseLeave={handleHover5}
          size='lg'
          variant='link'
          className='text-white hover:text-black mb-5 sm:mb-0'>
          {ishovered5 ? (
            <div>Maybe rick roll?</div>
          ) : (
            <div>I take you somewhere</div>
          )}
        </Button>
      </div>
      <Link
        target='_blank'
        href='https://ui.shadcn.com/docs/components/button'
        className={`${buttonVariants({
          variant: "ghost",
        })} absolute text-white text-base font-extrabold bottom-5 left-5 outline outline-white/60 hover:underline transform transition duration-300 ease-in-out`}>
        Source Code
      </Link>
    </div>
  );
};

export default Page;
