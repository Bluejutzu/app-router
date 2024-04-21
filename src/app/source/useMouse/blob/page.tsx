/** @format */
"use client";

import { Blob } from "@/components";
import React from "react";

const page = () => {
  return (
    <>
      <div className='select-none relative z-50 flex h-screen justify-center items-center'>
        <div className='relative'>
          <span className='text-white font-black text-5xl hover:gradient-text hover:cursor-none duration-500'>
            Move your mouse around
          </span>
        </div>
      </div>
      <div className='z-0'>
        <Blob />
      </div>
    </>
  );
};



export default page;
