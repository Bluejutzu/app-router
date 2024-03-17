/** @format */
"use client";

import Image from "next/image";
/* import {
  LogoutLink,
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components"; */
import { FiveMtext } from "../../../../public/images/index.ts";
import { PleaseRead } from "@/components";

export default function FiveM() {
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
        <div className='mx-auto max-w-6xl px-10 sm:py-10 lg:py-2 lg:my-20 px-100 rounded-2xl bg-gradient-to-r from-[#A40A0F]/50 to-[#FF9139]/40 shadow-2xl'>
          <div className='hidden sm:mb-8 sm:flex sm:justify-center'></div>
          <div className='text-center  py-10'>
            <h1 className='text-4xl font-bold tracking-tight text-white sm:text-6xl '>
              <Image src={FiveMtext} alt='FiveM' />
              <div className='relative flex-wrap mx-auto '></div>
              <hr className='h-px p-1 rounded-md my-8 bg-gray-200 border-0 dark:bg-gray-400' />
            </h1>
            <p className='mt-6 text-lg leading-8 text-gray-100 p-1'>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd
            </p>

            <div className='flex items-center justify-center gap-x-6'>
              <PleaseRead />
            </div>
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
