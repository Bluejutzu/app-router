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
  { name: "Features", href: "#" },
  { name: "About Us", href: "#" },
];

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className='bg-gray-900 text-white cursor-default'>
      <header className='absolute inset-x-0 top-0 z-50'>
        <nav
          className='flex items-center justify-between p-6 lg:px-8'
          aria-label='Global'>
          <div className='flex lg:flex-1'>
            <a href='/' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Your Company</span>
              <img
                className='h-8 w-auto'
                src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
                alt=''
              />
            </a>
          </div>
          <div className='flex lg:hidden'>
            <button
              type='button'
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200'
              onClick={() => setMobileMenuOpen(true)}>
              <span className='sr-only'>Open main menu</span>
              <Bars3Icon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='hidden lg:flex lg:gap-x-12'>
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className='text-sm font-semibold leading-6 text-zinc-300'>
                {item.name}
              </a>
            ))}
          </div>
          <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
            <p className='text-gray-500'>Account creation/login disabled</p>
          </div>
        </nav>
        <Dialog
          as='div'
          className='lg:hidden'
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}>
          <div className='fixed inset-0 z-50' />
          <Dialog.Panel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
            <div className='flex items-center justify-between'>
              <a href='/wadadw' className='-m-1.5 p-1.5'>
                <span className='sr-only'>Bluejutzu</span>
                <img
                  className='h-8 w-auto'
                  src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
                  alt=''
                />
              </a>
              <button
                type='button'
                className='-m-2.5 rounded-md p-2.5 text-gray-700'
                onClick={() => setMobileMenuOpen(false)}>
                <span className='sr-only'>Close menu</span>
                <XMarkIcon className='h-6 w-6' aria-hidden='true' />
              </button>
            </div>
            <div className='mt-6 flow-root'>
              <div className='-my-6 text-black'>
                <div className='py-6'>
                  <p className='text-gray-500'>
                    Account creation/login disabled
                  </p>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

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
        <div className='mx-auto max-w-3xl my-20 py-2 sm:py-2 lg:py-2 px-100 hover:max-w-5xl bg-slate-600/30 rounded-2xl hover:bg-gradient-to-r hover:from-[#4EABEE] hover:to-[#DE151B]/20 duration-300'>
          <div className='hidden sm:mb-8 sm:flex sm:justify-center'></div>
          <div className='text-center  px-6'>
            <h1 className='text-4xl font-bold tracking-tight text-white sm:text-6xl '>
              <Image src={ERLCTEXT} alt='Emergency Response: Liberty County' />
              <a href='#'>
                <p className='text-2xl hover:cursor-pointer'>
                  Click here to join!
                </p>
              </a>
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
        <div className='mx-auto max-w-3xl  py-2 sm:py-10 lg:py-1 px-100 hover:max-w-5xl bg-slate-600/30 rounded-2xl hover:bg-gradient-to-r hover:from-[#A40A0F] hover:to-[#FF9139]/20 duration-300'>
          <div className='hidden sm:mb-8 sm:flex sm:justify-center'></div>
          <div className='text-center  py-10'>
            <h1 className='text-4xl font-bold tracking-tight text-white sm:text-6xl '>
              <Image src={FiveMtext} alt='Emergency Response: Liberty County' />
              <a href='#'>
                <p className='text-2xl hover:cursor-pointer my-2'>
                  Click here to join!
                </p>
              </a>
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
        <div
          className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
          aria-hidden='true'>
          <div
            className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
