/** @format */
"use client";

import React from "react";

export default function Redirect() {
  return (
    <main className='grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8'>
      <div className='text-center'>
        <p className='text-base font-semibold text-emerald-700 dark:text-emerald-500'>
          There was a problem
        </p>
        <h1 className='mt-4 text-3xl font-bold tracking-tight text-zinc-50 '>
          This page cannot be accessed yet
          <p className='mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-400'>
            This may be an error. Please be patient for this to be resolved
          </p>
          <div className='mt-10 flex items-center justify-center gap-x-6'>
            <a href='/'>
              <button className='text-zinc-800 bg-zinc-100 p-3 rounded-xl hover:bg-zinc-400 transition duration-300'>
                Go back to Homepage
              </button>
            </a>
          </div>
        </h1>
      </div>
    </main>
  );
}
