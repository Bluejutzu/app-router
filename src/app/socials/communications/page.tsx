/** @format */
"use client";

import React from "react";
import { Navbar } from "@/components";


export default function page() {

  return (
    <div>
      <Navbar />
      <div className='text-white flex flex-col h-screen'>
        <div className='flex-grow flex items-center lg:justify-center lg:ml-10 sm:justify-center select-auto'>
          In development
        </div>
      </div>
    </div>
  );
}
