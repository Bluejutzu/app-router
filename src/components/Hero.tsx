/** @format */
"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
/* import {
  LogoutLink,
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components"; */

const navigation = [
  { name: "What we offer", href: "/experiences" },
  { name: "Communications", href: "/socials/communications" },
  { name: "About Us", href: "#" },
];

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className='bg-gray-900 text-white cursor-default'>
      <div className='isolate px-6 pt-14 lg:px-8'>
        <div
          className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
          aria-hidden='true'>
          <div
            className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
          <div className='hidden sm:mb-8 sm:flex sm:justify-center'></div>
          <div className='text-center'>
            <h1 className='text-4xl font-bold tracking-tight text-white sm:text-6xl'>
              Made with{" "}
              <a
                href='https://tailwindcss.com'
                className='text-white hover:text-blue-300 duration-150'>
                TailwindCSS
              </a>{" "}
              <a
                href='https://nextjs.org'
                className='text-white hover:text-zinc-600 duration-150'>
                NextJS
              </a>{" "}
              <a
                href='https://react.dev/'
                className='text-white hover:text-indigo-600 duration-150'>
                ReactJS
              </a>
            </h1>
            <p className='mt-6 text-lg leading-8 text-gray-600'></p>
            <div className='mt-10 flex items-center justify-center gap-x-6'></div>
          </div>
        </div>
        <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 '>
          <div className='hidden sm:mb-8 sm:flex sm:justify-center'></div>
          <div className='text-center'>
            <h1 className='text-4xl font-bold tracking-tight text-white sm:text-6xl'>
              Written in{" "}
              <a
                href='https://typescriptlang.org/'
                className='text-white hover:text-blue-600 duration-150'>
                Typescript
              </a>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
