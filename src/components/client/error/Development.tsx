/** @format */

import React from "react";
import axios from "axios";

export default async function Development() {
  const req = await axios.get(
    "https://v2.jokeapi.dev/joke/Any?blacklistFlags=political,explicit&type=single"
  );
  const joke = req.data.joke;

  return (
    <main className='grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8'>
      <div className='text-center'>
        <p className='text-base font-semibold text-emerald-700 dark:text-emerald-500'>
          There was a problem
        </p>
        <h1 className='mt-4 text-3xl font-bold tracking-tight text-zinc-50 '>
          This Page is under development!
          <p className='mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-400'>
            This is intended, but here is a random joke!
          </p>
          <div className='text-white mt-5 font-semibold text-xl'>{joke}</div>
          <div className='mt-10 flex items-center justify-center gap-x-6'>
            <a href='/'>
              <button className='font-bold text-zinc-800 bg-zinc-100 p-3 rounded-xl hover:bg-zinc-400 transition duration-300'>
                Go back to Homepage
              </button>
            </a>
          </div>
        </h1>
      </div>
    </main>
  );
}
