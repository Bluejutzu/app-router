/** @format */
"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
/* import {
  LogoutLink,
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components"; */
import { ERLCTEXT, FiveMtext } from "../../public/images/index.ts";

const navigation = [
  { name: "What we offer", href: "/experiences" },
  { name: "Communications", href: "/socials/communications" },
  { name: "About Us", href: "#" },
];

export default function Experiences() {
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
        <div className='mx-auto max-w-3xl my-20 py-2 sm:py-2 lg:py-2  hover:max-w-5xl bg-slate-600/30 rounded-2xl hover:bg-gradient-to-r hover:from-[#4EABEE] hover:to-[#DE151B]/20 duration-300'>
          <div className='hidden sm:mb-8 sm:flex sm:justify-center'></div>
          <div className='text-center  px-6'>
            <h1 className='text-4xl font-bold tracking-tight text-white sm:text-6xl '>
              <Image src={ERLCTEXT} alt='Emergency Response: Liberty County' />
              <div className='relative flex-wrap mx-auto '>
                <a href='#'>
                  <p className='text-xl text-white/80 hover:cursor-pointer hover:text-white my-2'>
                    Click here to join!
                  </p>
                </a>
                <a href='experiences/erlc'>
                  <p className='bg-indigo-700 p-1 rounded-lg text-2xl hover:cursor-pointer my-2'>
                    Learn More
                  </p>
                </a>
              </div>
              <hr className='h-px p-1 rounded-md my-8 bg-gray-200 border-0 dark:bg-gray-400' />
            </h1>
            <p className='mt-6 text-lg leading-8 text-gray-100 p-1 overflow-clip'>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd
            </p>
            <div className='mt-10 flex items-center justify-center gap-x-6'></div>
          </div>
        </div>
        <div className='mx-auto max-w-3xl p-6 sm:py-2 lg:py-2  hover:max-w-5xl bg-slate-600/30 rounded-2xl hover:bg-gradient-to-r hover:from-[#A40A0F]/50 hover:to-[#FF9139]/20 duration-300'>
          <div className='hidden sm:mb-8 sm:flex sm:justify-center'></div>
          <div className='text-center  py-6'>
            <h1 className='text-4xl font-bold tracking-tight text-white sm:text-6xl '>
              <Image src={FiveMtext} alt='Emergency Response: Liberty County' />
              <div className='relative flex-wrap mx-auto '>
                <a href='#'>
                  <p className='text-xl text-white/80 hover:cursor-pointer hover:text-white my-2'>
                    Click here to join!
                  </p>
                </a>
                <a href='experiences/fivem'>
                  <p className='bg-indigo-700 p-1 rounded-lg text-2xl hover:cursor-pointer my-2'>
                    Learn More
                  </p>
                </a>
              </div>
              <hr className='h-px p-1 rounded-md my-8 bg-gray-200 border-0 dark:bg-gray-400' />
            </h1>
            <p className='mt-6 text-lg leading-8 text-gray-100 p-1'>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd
            </p>
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
